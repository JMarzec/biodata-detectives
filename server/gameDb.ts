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
  rank: string
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const scoreId = nanoid();
  await db.insert(scores).values({
    id: scoreId,
    teamId,
    totalScore,
    accuracy,
    timeTaken,
    answers: JSON.stringify(answers),
    rank,
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
 * Get all scores (leaderboard)
 */
export async function getAllScores() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db
    .select({
      id: scores.id,
      teamId: scores.teamId,
      teamName: teams.teamName,
      totalScore: scores.totalScore,
      accuracy: scores.accuracy,
      timeTaken: scores.timeTaken,
      rank: scores.rank,
      completedAt: scores.completedAt,
    })
    .from(scores)
    .innerJoin(teams, eq(scores.teamId, teams.id))
    .orderBy(desc(scores.totalScore), scores.timeTaken);

  return result;
}

/**
 * Get top N scores
 */
export async function getTopScores(limit: number = 10) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db
    .select({
      id: scores.id,
      teamId: scores.teamId,
      teamName: teams.teamName,
      totalScore: scores.totalScore,
      accuracy: scores.accuracy,
      timeTaken: scores.timeTaken,
      rank: scores.rank,
      completedAt: scores.completedAt,
    })
    .from(scores)
    .innerJoin(teams, eq(scores.teamId, teams.id))
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
