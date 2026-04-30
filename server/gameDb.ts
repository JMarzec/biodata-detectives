/**
 * BioData Detectives - Database Helpers
 * Team and score operations
 */

import { eq, desc, and } from "drizzle-orm";
import { teams, scores } from "../drizzle/schema";
import { getDb } from "./db";
import { nanoid } from "nanoid";

/**
 * Create a new team
 */
export async function createTeam(teamName: string, language: "en" | "pt" = "en") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const teamId = nanoid();
  await db.insert(teams).values({
    id: teamId,
    teamName,
    language,
    createdAt: new Date(),
  });

  return teamId;
}

/**
 * Get team by ID
 */
export async function getTeamById(teamId: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.select().from(teams).where(eq(teams.id, teamId)).limit(1);

  return result.length > 0 ? result[0] : null;
}

/**
 * Record a score for a team
 */
export async function recordScore(
  teamId: string,
  totalScore: number,
  accuracy: number,
  timeTaken: number,
  answers: any[],
  rank: string,
  isExpertMode: boolean = false,
  sessionId?: string,
  difficulty: "beginner" | "normal" | "expert" = "normal"
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const scoreId = nanoid();
  await db.insert(scores).values({
    id: scoreId,
    teamId,
    sessionId: sessionId || null,
    totalScore,
    accuracy,
    timeTaken,
    answers: JSON.stringify(answers),
    rank,
    isExpertMode: isExpertMode ? "true" : "false",
    difficulty,
    completedAt: new Date(),
  });

  // Update team completion time
  await db
    .update(teams)
    .set({ completedAt: new Date() })
    .where(eq(teams.id, teamId));

  return scoreId;
}

/**
 * Get all scores (leaderboard) - optionally filtered by mode or difficulty
 */
export async function getAllScores(expertMode?: boolean, difficulty?: "beginner" | "normal" | "expert") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  let whereCondition = undefined;
  if (difficulty !== undefined) {
    whereCondition = eq(scores.difficulty, difficulty);
  } else if (expertMode !== undefined) {
    const modeValue = expertMode ? "true" : "false";
    whereCondition = eq(scores.isExpertMode, modeValue as any);
  }

  const result = await db
    .select({
      id: scores.id,
      teamId: scores.teamId,
      teamName: teams.teamName,
      totalScore: scores.totalScore,
      accuracy: scores.accuracy,
      timeTaken: scores.timeTaken,
      rank: scores.rank,
      isExpertMode: scores.isExpertMode,
      completedAt: scores.completedAt,
    })
    .from(scores)
    .innerJoin(teams, eq(scores.teamId, teams.id))
    .where(whereCondition || undefined)
    .orderBy(desc(scores.totalScore), scores.timeTaken);

  return result;
}

/**
 * Get top N scores - optionally filtered by mode or difficulty
 */
export async function getTopScores(limit: number = 10, expertMode?: boolean, difficulty?: "beginner" | "normal" | "expert") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  let whereCondition = undefined;
  if (difficulty !== undefined) {
    whereCondition = eq(scores.difficulty, difficulty);
  } else if (expertMode !== undefined) {
    const modeValue = expertMode ? "true" : "false";
    whereCondition = eq(scores.isExpertMode, modeValue as any);
  }

  const result = await db
    .select({
      id: scores.id,
      teamId: scores.teamId,
      teamName: teams.teamName,
      totalScore: scores.totalScore,
      accuracy: scores.accuracy,
      timeTaken: scores.timeTaken,
      rank: scores.rank,
      isExpertMode: scores.isExpertMode,
      completedAt: scores.completedAt,
    })
    .from(scores)
    .innerJoin(teams, eq(scores.teamId, teams.id))
    .where(whereCondition || undefined)
    .orderBy(desc(scores.totalScore), scores.timeTaken)
    .limit(limit);

  return result;
}

/**
 * Get score by team ID
 */
export async function getScoreByTeamId(teamId: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db
    .select()
    .from(scores)
    .where(eq(scores.teamId, teamId))
    .limit(1);

  return result.length > 0 ? result[0] : null;
}

/**
 * Delete all scores (admin function)
 */
export async function deleteAllScores() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Delete all scores
  await db.delete(scores);

  // Delete all teams
  await db.delete(teams);

  return true;
}

/**
 * Get score count
 */
export async function getScoreCount() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.select({ count: scores.id }).from(scores);

  return result.length > 0 ? result.length : 0;
}

/**
 * Export scores as CSV format
 */
export async function exportScoresAsCSV() {
  const allScores = await getAllScores();

  const headers = ["Rank", "Team Name", "Score", "Accuracy (%)", "Time (s)", "Certificate", "Completed At"];
  const rows = allScores.map((score, index) => [
    index + 1,
    score.teamName,
    score.totalScore,
    score.accuracy,
    score.timeTaken,
    score.rank,
    new Date(score.completedAt).toLocaleString(),
  ]);

  const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");

  return csv;
}


/**
 * Get aggregated team score for a session (sum of all members' scores)
 */
export async function getTeamSessionScore(sessionId: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Get all scores for this session
  const sessionScores = await db
    .select({
      totalScore: scores.totalScore,
      accuracy: scores.accuracy,
      timeTaken: scores.timeTaken,
      isExpertMode: scores.isExpertMode,
    })
    .from(scores)
    .where(eq(scores.sessionId, sessionId as any));

  if (sessionScores.length === 0) {
    return null;
  }

  // Aggregate scores
  const totalScore = sessionScores.reduce((sum, s) => sum + s.totalScore, 0);
  const avgAccuracy = sessionScores.reduce((sum, s) => sum + s.accuracy, 0) / sessionScores.length;
  const maxTimeTaken = Math.max(...sessionScores.map(s => s.timeTaken));
  const isExpertMode = sessionScores[0]?.isExpertMode === "true";

  return {
    totalScore,
    avgAccuracy,
    maxTimeTaken,
    isExpertMode,
    memberCount: sessionScores.length,
  };
}

/**
 * Get leaderboard with team session aggregation
 */
export async function getTeamSessionLeaderboard(expertMode?: boolean) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  let whereCondition = undefined;
  if (expertMode !== undefined) {
    const modeValue = expertMode ? "true" : "false";
    whereCondition = eq(scores.isExpertMode, modeValue as any);
  }

  // Get all scores grouped by session
  const allScores = await db
    .select({
      id: scores.id,
      sessionId: scores.sessionId,
      teamId: scores.teamId,
      teamName: teams.teamName,
      totalScore: scores.totalScore,
      accuracy: scores.accuracy,
      timeTaken: scores.timeTaken,
      isExpertMode: scores.isExpertMode,
      completedAt: scores.completedAt,
    })
    .from(scores)
    .innerJoin(teams, eq(scores.teamId, teams.id))
    .where(whereCondition || undefined)
    .orderBy(desc(scores.completedAt));

  // Group by sessionId (for multi-player) or teamId (for single-player)
  const leaderboard: any[] = [];
  const sessionMap = new Map();
  const teamMap = new Map();

  for (const score of allScores) {
    if (score.sessionId) {
      // Multi-player session
      if (!sessionMap.has(score.sessionId)) {
        sessionMap.set(score.sessionId, {
          sessionId: score.sessionId,
          teamId: score.teamId,
          teamName: score.teamName,
          totalScore: 0,
          accuracy: 0,
          timeTaken: 0,
          memberCount: 0,
          isExpertMode: score.isExpertMode,
          completedAt: score.completedAt,
          scores: [],
        });
      }
      const session = sessionMap.get(score.sessionId);
      session.scores.push(score);
      session.totalScore += score.totalScore;
      session.accuracy += score.accuracy;
      session.timeTaken = Math.max(session.timeTaken, score.timeTaken);
      session.memberCount++;
    } else {
      // Single-player team
      if (!teamMap.has(score.teamId)) {
        teamMap.set(score.teamId, {
          sessionId: null,
          teamId: score.teamId,
          teamName: score.teamName,
          totalScore: score.totalScore,
          accuracy: score.accuracy,
          timeTaken: score.timeTaken,
          memberCount: 1,
          isExpertMode: score.isExpertMode,
          completedAt: score.completedAt,
        });
      }
    }
  }

  // Combine and sort
  sessionMap.forEach(session => {
    session.accuracy = session.accuracy / session.memberCount;
    leaderboard.push(session);
  });

  teamMap.forEach(team => {
    leaderboard.push(team);
  });

  // Sort by score descending, then by time ascending
  leaderboard.sort((a, b) => {
    if (b.totalScore !== a.totalScore) {
      return b.totalScore - a.totalScore;
    }
    return a.timeTaken - b.timeTaken;
  });

  return leaderboard;
}

/**
 * Get top N team sessions with aggregated scores
 */
export async function getTopTeamSessions(limit: number = 10, expertMode?: boolean) {
  const leaderboard = await getTeamSessionLeaderboard(expertMode);
  return leaderboard.slice(0, limit);
}
