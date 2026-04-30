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
};

export type FinalScore = {
  totalScore: number;
  accuracy: number; // 0-100
  timeTaken: number; // seconds
  rank: string;
  rankKey: string; // for translation
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
 */
export function calculateScore(answers: GameAnswer[]): number {
  let score = 0;

  for (const answer of answers) {
    if (answer.isCorrect) {
      score += 100;
      // Speed bonus: if answered in under 30 seconds
      if (answer.timeSpent < 30) {
        score += 20;
      }
    }
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
export function calculateFinalScore(answers: GameAnswer[], startTime: number): FinalScore {
  const totalScore = calculateScore(answers);
  const accuracy = calculateAccuracy(answers);
  const timeTaken = Math.round((Date.now() - startTime) / 1000);
  const { rank, rankKey } = calculateRank(accuracy);

  return {
    totalScore,
    accuracy,
    timeTaken,
    rank,
    rankKey,
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
 */
export function selectGameQuestions(allQuestions: any[]): any[] {
  const round1 = allQuestions.filter((q) => q.round === 1);
  const round2 = allQuestions.filter((q) => q.round === 2);
  const round3 = allQuestions.filter((q) => q.round === 3);

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
