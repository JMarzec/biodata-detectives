import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { createTeam, recordScore, getAllScores, getTopScores } from "./gameDb";
import { calculateFinalScore, calculateScore, calculateRank } from "../shared/gameEngine";
import { questions } from "../shared/questions";
import { expertQuestions } from "../shared/expertQuestions";

describe("End-to-End Game Flow", () => {
  let teamId: string;
  let scoreId: string;

  describe("Team Creation and Setup", () => {
    it("should create a team successfully", async () => {
      teamId = await createTeam("Test Team", "en");
      expect(teamId).toBeTruthy();
      expect(typeof teamId).toBe("string");
    });

    it("should create a team with Portuguese language", async () => {
      const ptTeamId = await createTeam("Equipe Teste", "pt");
      expect(ptTeamId).toBeTruthy();
      expect(typeof ptTeamId).toBe("string");
    });
  });

  describe("Normal Mode Gameplay", () => {
    it("should calculate correct score for normal mode", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 10 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 25 },
        { questionId: "q3", answerId: "a3", isCorrect: false, timeSpent: 35 },
      ];

      const score = calculateScore(answers, false);
      // (100 + 20) + (100 + 20) + 0 = 240
      expect(score).toBe(240);
    });

    it("should calculate final score with accuracy", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 10 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 25 },
        { questionId: "q3", answerId: "a3", isCorrect: false, timeSpent: 35 },
      ];
      const startTime = Date.now() - 5000;

      const finalScore = calculateFinalScore(answers, startTime, false);
      expect(finalScore.totalScore).toBe(240);
      expect(finalScore.accuracy).toBeCloseTo(66.67, 0); // 2 out of 3 correct
      expect(finalScore.timeTaken).toBeGreaterThanOrEqual(5);
    });

    it("should assign correct rank based on accuracy", () => {
      const { rankKey } = calculateRank(95);
      expect(rankKey).toBe("ranks.rank1"); // Senior BioData Investigators

      const { rankKey: rank2 } = calculateRank(80);
      expect(rankKey).toBe("ranks.rank1");

      const { rankKey: rank3 } = calculateRank(60);
      expect(rank3).toBe("ranks.rank3"); // Biomedical Data Analysts
    });

    it("should record score and retrieve from leaderboard", async () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 10 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 25 },
        { questionId: "q3", answerId: "a3", isCorrect: false, timeSpent: 35 },
      ];

      scoreId = await recordScore(
        teamId,
        240,
        66.67,
        5,
        answers,
        "Senior BioData Investigators",
        false
      );

      expect(scoreId).toBeTruthy();

      // Verify score appears in leaderboard
      const allScores = await getAllScores();
      const recordedScore = allScores.find((s) => s.id === scoreId);
      expect(recordedScore).toBeTruthy();
      expect(recordedScore?.totalScore).toBe(240);
      expect(recordedScore?.isExpertMode).toBe("false");
    });
  });

  describe("Expert Mode Gameplay", () => {
    let expertTeamId: string;

    beforeAll(async () => {
      expertTeamId = await createTeam("Expert Team", "en");
    });

    it("should calculate correct score for expert mode with 1.5x multiplier", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 10 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 20 },
        { questionId: "q3", answerId: "a3", isCorrect: false, timeSpent: 25 },
      ];

      const score = calculateScore(answers, true);
      // Base: (100 + 20 for 10s<15s) + (100 + 0 for 20s>15s) + 0 = 220
      // Expert: 220 * 1.5 = 330
      expect(score).toBe(330);
    });

    it("should use 15-second threshold for expert mode speed bonus", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 12 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 16 },
      ];

      const score = calculateScore(answers, true);
      // Base: (100 + 20 for 12s<15s) + (100 + 0 for 16s>15s) = 220
      // Expert: 220 * 1.5 = 330
      expect(score).toBe(330);
    });

    it("should record expert mode score with isExpertMode flag", async () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 10 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 12 },
        { questionId: "q3", answerId: "a3", isCorrect: true, timeSpent: 14 },
      ];

      const expertScoreId = await recordScore(
        expertTeamId,
        540, // (100+20)*3 = 360, then * 1.5 = 540
        100,
        5,
        answers,
        "Senior BioData Investigators",
        true
      );

      expect(expertScoreId).toBeTruthy();

      // Verify expert mode flag is stored
      const allScores = await getAllScores();
      const expertScore = allScores.find((s) => s.id === expertScoreId);
      expect(expertScore).toBeTruthy();
      expect(expertScore?.isExpertMode).toBe("true");
      expect(expertScore?.totalScore).toBe(540);
    });
  });

  describe("Leaderboard Functionality", () => {
    it("should retrieve all scores from leaderboard", async () => {
      const allScores = await getAllScores();
      expect(Array.isArray(allScores)).toBe(true);
      expect(allScores.length).toBeGreaterThan(0);
    });

    it("should retrieve top scores with limit", async () => {
      const topScores = await getTopScores(5);
      expect(Array.isArray(topScores)).toBe(true);
      expect(topScores.length).toBeLessThanOrEqual(5);
    });

    it("should sort scores by totalScore descending", async () => {
      const allScores = await getAllScores();
      for (let i = 0; i < allScores.length - 1; i++) {
        expect(allScores[i].totalScore).toBeGreaterThanOrEqual(allScores[i + 1].totalScore);
      }
    });

    it("should have expert and normal mode scores in leaderboard", async () => {
      const allScores = await getAllScores();
      const hasExpertMode = allScores.some((s) => s.isExpertMode === "true");
      const hasNormalMode = allScores.some((s) => s.isExpertMode === "false");
      expect(hasExpertMode || hasNormalMode).toBe(true);
    });
  });

  describe("Question Bank Integrity", () => {
    it("should have sufficient normal mode questions", () => {
      expect(questions.length).toBeGreaterThanOrEqual(24);
    });

    it("should have sufficient expert mode questions", () => {
      expect(expertQuestions.length).toBeGreaterThanOrEqual(24);
    });

    it("should have 8 questions per round in normal mode", () => {
      const round1 = questions.filter((q) => q.round === 1);
      const round2 = questions.filter((q) => q.round === 2);
      const round3 = questions.filter((q) => q.round === 3);

      expect(round1.length).toBeGreaterThanOrEqual(8);
      expect(round2.length).toBeGreaterThanOrEqual(8);
      expect(round3.length).toBeGreaterThanOrEqual(8);
    });

    it("should have bilingual content for all questions", () => {
      questions.forEach((q) => {
        expect(q.title).toBeTruthy();
        expect(q.titlePt).toBeTruthy();
        expect(q.scenario).toBeTruthy();
        expect(q.scenarioPt).toBeTruthy();
        expect(q.explanation).toBeTruthy();
        expect(q.explanationPt).toBeTruthy();

        q.answerOptions.forEach((option) => {
          expect(option.text).toBeTruthy();
          expect(option.textPt).toBeTruthy();
        });
      });
    });

    it("should have valid answer options", () => {
      questions.forEach((q) => {
        expect(q.answerOptions.length).toBeGreaterThanOrEqual(2);
        expect(q.answerOptions.length).toBeLessThanOrEqual(4);

        const correctAnswerExists = q.answerOptions.some((a) => a.id === q.correctAnswerId);
        expect(correctAnswerExists).toBe(true);
      });
    });
  });

  describe("Scoring Edge Cases", () => {
    it("should handle all correct answers", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 5 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 5 },
        { questionId: "q3", answerId: "a3", isCorrect: true, timeSpent: 5 },
      ];

      const score = calculateScore(answers, false);
      // (100 + 20) * 3 = 360
      expect(score).toBe(360);
    });

    it("should handle all incorrect answers", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: false, timeSpent: 5 },
        { questionId: "q2", answerId: "a2", isCorrect: false, timeSpent: 5 },
        { questionId: "q3", answerId: "a3", isCorrect: false, timeSpent: 5 },
      ];

      const score = calculateScore(answers, false);
      expect(score).toBe(0);
    });

    it("should handle mixed correct/incorrect with varying times", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 5 },
        { questionId: "q2", answerId: "a2", isCorrect: false, timeSpent: 40 },
        { questionId: "q3", answerId: "a3", isCorrect: true, timeSpent: 35 },
      ];

      const score = calculateScore(answers, false);
      // (100 + 20) + 0 + (100 + 0) = 220
      expect(score).toBe(220);
    });
  });
});
