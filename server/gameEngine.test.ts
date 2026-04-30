import { describe, it, expect } from "vitest";
import {
  calculateScore,
  calculateAccuracy,
  calculateRank,
  calculateFinalScore,
  formatTime,
  shuffleArray,
  selectGameQuestions,
  sortLeaderboard,
  isNewTopScore,
} from "../shared/gameEngine";
import { questions } from "../shared/questions";

describe("Game Engine", () => {
  describe("calculateScore", () => {
    it("should award 100 points for correct answer", () => {
      const answers = [
        { questionId: "1", answerId: "a", isCorrect: true, timeSpent: 45 },
      ];
      expect(calculateScore(answers)).toBe(100);
    });

    it("should award speed bonus for answers under 30 seconds", () => {
      const answers = [
        { questionId: "1", answerId: "a", isCorrect: true, timeSpent: 20 },
      ];
      expect(calculateScore(answers)).toBe(120); // 100 + 20 bonus
    });

    it("should not award points for incorrect answer", () => {
      const answers = [
        { questionId: "1", answerId: "a", isCorrect: false, timeSpent: 10 },
      ];
      expect(calculateScore(answers)).toBe(0);
    });

    it("should calculate multiple answers correctly", () => {
      const answers = [
        { questionId: "1", answerId: "a", isCorrect: true, timeSpent: 20 },
        { questionId: "2", answerId: "b", isCorrect: true, timeSpent: 45 },
        { questionId: "3", answerId: "c", isCorrect: false, timeSpent: 30 },
      ];
      expect(calculateScore(answers)).toBe(220); // 120 + 100 + 0
    });
  });

  describe("calculateAccuracy", () => {
    it("should return 0 for empty answers", () => {
      expect(calculateAccuracy([])).toBe(0);
    });

    it("should return 100 for all correct", () => {
      const answers = [
        { questionId: "1", answerId: "a", isCorrect: true, timeSpent: 20 },
        { questionId: "2", answerId: "b", isCorrect: true, timeSpent: 25 },
      ];
      expect(calculateAccuracy(answers)).toBe(100);
    });

    it("should return 50 for half correct", () => {
      const answers = [
        { questionId: "1", answerId: "a", isCorrect: true, timeSpent: 20 },
        { questionId: "2", answerId: "b", isCorrect: false, timeSpent: 25 },
      ];
      expect(calculateAccuracy(answers)).toBe(50);
    });

    it("should return 0 for all incorrect", () => {
      const answers = [
        { questionId: "1", answerId: "a", isCorrect: false, timeSpent: 20 },
        { questionId: "2", answerId: "b", isCorrect: false, timeSpent: 25 },
      ];
      expect(calculateAccuracy(answers)).toBe(0);
    });
  });

  describe("calculateRank", () => {
    it("should assign Senior BioData Investigators for 95%+", () => {
      const { rankKey } = calculateRank(95);
      expect(rankKey).toBe("ranks.rank1");
    });

    it("should assign Certified Molecular Detectives for 80-94%", () => {
      const { rankKey } = calculateRank(85);
      expect(rankKey).toBe("ranks.rank2");
    });

    it("should assign Biomedical Data Analysts for 60-79%", () => {
      const { rankKey } = calculateRank(70);
      expect(rankKey).toBe("ranks.rank3");
    });

    it("should assign Junior Lab Detectives for 40-59%", () => {
      const { rankKey } = calculateRank(50);
      expect(rankKey).toBe("ranks.rank4");
    });

    it("should assign Researchers in Training for <40%", () => {
      const { rankKey } = calculateRank(30);
      expect(rankKey).toBe("ranks.rank5");
    });
  });

  describe("calculateFinalScore", () => {
    it("should calculate complete final score", () => {
      const startTime = Date.now() - 120000; // 2 minutes ago
      const answers = [
        { questionId: "1", answerId: "a", isCorrect: true, timeSpent: 20 },
        { questionId: "2", answerId: "b", isCorrect: true, timeSpent: 25 },
        { questionId: "3", answerId: "c", isCorrect: false, timeSpent: 30 },
      ];

      const result = calculateFinalScore(answers, startTime);

      expect(result.totalScore).toBe(240); // 120 + 120 + 0 (both correct answers get speed bonus)
      expect(result.accuracy).toBe(67); // 2 out of 3
      expect(result.timeTaken).toBeGreaterThanOrEqual(120);
      expect(result.rankKey).toBe("ranks.rank3");
    });
  });

  describe("formatTime", () => {
    it("should format seconds correctly", () => {
      expect(formatTime(30)).toBe("30s");
      expect(formatTime(60)).toBe("1m 0s");
      expect(formatTime(125)).toBe("2m 5s");
    });
  });

  describe("shuffleArray", () => {
    it("should return array with same elements", () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(original);
      expect(shuffled.sort()).toEqual(original.sort());
    });

    it("should not modify original array", () => {
      const original = [1, 2, 3, 4, 5];
      const copy = [...original];
      shuffleArray(original);
      expect(original).toEqual(copy);
    });
  });

  describe("selectGameQuestions", () => {
    it("should select 9 questions total (3 per round)", () => {
      const selected = selectGameQuestions(questions);
      expect(selected).toHaveLength(9);
    });

    it("should have 3 questions from each round", () => {
      const selected = selectGameQuestions(questions);
      const round1 = selected.filter((q) => q.round === 1);
      const round2 = selected.filter((q) => q.round === 2);
      const round3 = selected.filter((q) => q.round === 3);

      expect(round1).toHaveLength(3);
      expect(round2).toHaveLength(3);
      expect(round3).toHaveLength(3);
    });
  });

  describe("sortLeaderboard", () => {
    it("should sort by score descending", () => {
      const entries = [
        { teamName: "Team A", totalScore: 100, accuracy: 50, timeTaken: 120, rank: "test" },
        { teamName: "Team B", totalScore: 200, accuracy: 75, timeTaken: 100, rank: "test" },
        { teamName: "Team C", totalScore: 150, accuracy: 60, timeTaken: 110, rank: "test" },
      ];

      const sorted = sortLeaderboard(entries);

      expect(sorted[0].teamName).toBe("Team B");
      expect(sorted[1].teamName).toBe("Team C");
      expect(sorted[2].teamName).toBe("Team A");
    });

    it("should use time as tiebreaker", () => {
      const entries = [
        { teamName: "Team A", totalScore: 100, accuracy: 50, timeTaken: 120, rank: "test" },
        { teamName: "Team B", totalScore: 100, accuracy: 50, timeTaken: 100, rank: "test" },
      ];

      const sorted = sortLeaderboard(entries);

      expect(sorted[0].teamName).toBe("Team B"); // Faster time wins
      expect(sorted[1].teamName).toBe("Team A");
    });

    it("should assign correct rank numbers", () => {
      const entries = [
        { teamName: "Team A", totalScore: 100, accuracy: 50, timeTaken: 120, rank: "test" },
        { teamName: "Team B", totalScore: 200, accuracy: 75, timeTaken: 100, rank: "test" },
      ];

      const sorted = sortLeaderboard(entries);

      expect(sorted[0].rank).toBe(1);
      expect(sorted[1].rank).toBe(2);
    });
  });

  describe("isNewTopScore", () => {
    it("should return true for empty leaderboard", () => {
      expect(isNewTopScore(100, [])).toBe(true);
    });

    it("should return true for score higher than top", () => {
      const leaderboard = [
        { rank: 1, teamName: "Team A", totalScore: 100, accuracy: 50, timeTaken: 120, rankTitle: "test", completedAt: new Date() },
      ];
      expect(isNewTopScore(150, leaderboard)).toBe(true);
    });

    it("should return false for score lower than top", () => {
      const leaderboard = [
        { rank: 1, teamName: "Team A", totalScore: 100, accuracy: 50, timeTaken: 120, rankTitle: "test", completedAt: new Date() },
      ];
      expect(isNewTopScore(50, leaderboard)).toBe(false);
    });
  });
});
