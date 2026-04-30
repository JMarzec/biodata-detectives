/**
 * BioData Detectives - Game Engine
 * Handles scoring, ranking, game flow, and logic
 */

export type GameAnswer = {
  questionId: string;
  answerId: string;
  isCorrect: boolean;
  timeSpent: number; // seconds
};

export type GameSession = {
  teamId: string;
  teamName: string;
  language: "en" | "pt";
  currentRound: 1 | 2 | 3;
  currentQuestionIndex: number;
  answers: GameAnswer[];
  startTime: number; // timestamp
  roundStartTime: number; // timestamp
  isComplete: boolean;
  isExpertMode?: boolean; // Expert Mode flag
};

export type FinalScore = {
  totalScore: number;
  accuracy: number; // 0-100
  timeTaken: number; // seconds
  rank: string;
  rankKey: string; // for translation
  isExpertMode?: boolean; // Expert Mode flag
};

/**
 * Calculate rank based on accuracy percentage
 */
export function calculateRank(accuracy: number): { rank: string; rankKey: string } {
  if (accuracy >= 95) {
    return { rank: "Senior BioData Investigators", rankKey: "ranks.rank1" };
  } else if (accuracy >= 80) {
    return { rank: "Certified Molecular Detectives", rankKey: "ranks.rank2" };
  } else if (accuracy >= 60) {
    return { rank: "Biomedical Data Analysts", rankKey: "ranks.rank3" };
  } else if (accuracy >= 40) {
    return { rank: "Junior Lab Detectives", rankKey: "ranks.rank4" };
  } else {
    return { rank: "Researchers in Training", rankKey: "ranks.rank5" };
  }
}

/**
 * Calculate total score from answers
 * Base: +100 for correct answer
 * Speed bonus: +20 if answered in under 30 seconds
 * Expert Mode: 1.5x multiplier for all points
 */
export function calculateScore(answers: GameAnswer[], isExpertMode?: boolean): number {
  let score = 0;

  for (const answer of answers) {
    if (answer.isCorrect) {
      score += 100;
      // Speed bonus: if answered in under 30 seconds (or 15s in Expert Mode)
      const speedThreshold = isExpertMode ? 15 : 30;
      if (answer.timeSpent < speedThreshold) {
        score += 20;
      }
    }
  }

  // Apply Expert Mode multiplier (1.5x)
  if (isExpertMode) {
    score = Math.round(score * 1.5);
  }

  return score;
}

/**
 * Calculate accuracy percentage
 */
export function calculateAccuracy(answers: GameAnswer[]): number {
  if (answers.length === 0) return 0;

  const correct = answers.filter((a) => a.isCorrect).length;
  return Math.round((correct / answers.length) * 100);
}

/**
 * Calculate final score object
 */
export function calculateFinalScore(answers: GameAnswer[], startTime: number, isExpertMode?: boolean): FinalScore {
  const totalScore = calculateScore(answers, isExpertMode);
  const accuracy = calculateAccuracy(answers);
  const timeTaken = Math.round((Date.now() - startTime) / 1000);
  const { rank, rankKey } = calculateRank(accuracy);

  return {
    totalScore,
    accuracy,
    timeTaken,
    rank,
    rankKey,
    isExpertMode,
  };
}

/**
 * Format time in seconds to readable format
 */
export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  }
  return `${secs}s`;
}

/**
 * Shuffle array (Fisher-Yates)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Select random questions for each round
 * Returns 3 questions per round (9 total)
 * Can filter by difficulty for Expert Mode
 */
export function selectGameQuestions(allQuestions: any[], difficulty?: string): any[] {
  let round1 = allQuestions.filter((q) => q.round === 1);
  let round2 = allQuestions.filter((q) => q.round === 2);
  let round3 = allQuestions.filter((q) => q.round === 3);

  // Filter by difficulty if specified (Expert Mode)
  if (difficulty === "hard") {
    round1 = round1.filter((q) => q.difficulty === "hard");
    round2 = round2.filter((q) => q.difficulty === "hard");
    round3 = round3.filter((q) => q.difficulty === "hard");
  }

  const selected = [
    ...shuffleArray(round1).slice(0, 3),
    ...shuffleArray(round2).slice(0, 3),
    ...shuffleArray(round3).slice(0, 3),
  ];

  return selected;
}

/**
 * Leaderboard entry
 */
export type LeaderboardEntry = {
  rank: number;
  teamName: string;
  totalScore: number;
  accuracy: number;
  timeTaken: number;
  rankTitle: string;
  completedAt: Date;
};

/**
 * Sort and rank leaderboard entries
 * Primary sort: score (descending)
 * Tiebreaker: time (ascending)
 */
export function sortLeaderboard(entries: any[]): LeaderboardEntry[] {
  const sorted = [...entries].sort((a, b) => {
    // Primary: score (descending)
    if (b.totalScore !== a.totalScore) {
      return b.totalScore - a.totalScore;
    }
    // Tiebreaker: time (ascending - faster is better)
    return a.timeTaken - b.timeTaken;
  });

  return sorted.map((entry, index) => ({
    rank: index + 1,
    teamName: entry.teamName,
    totalScore: entry.totalScore,
    accuracy: entry.accuracy,
    timeTaken: entry.timeTaken,
    rankTitle: entry.rank,
    completedAt: entry.completedAt,
  }));
}

/**
 * Get top N entries from leaderboard
 */
export function getTopLeaderboard(entries: LeaderboardEntry[], limit: number = 10): LeaderboardEntry[] {
  return entries.slice(0, limit);
}

/**
 * Check if a score is a new top score
 */
export function isNewTopScore(score: number, leaderboard: LeaderboardEntry[]): boolean {
  if (leaderboard.length === 0) return true;
  return score > leaderboard[0].totalScore;
}
