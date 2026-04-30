import { describe, expect, it } from "vitest";
import { calculateScore, calculateFinalScore, selectGameQuestions } from "../shared/gameEngine";
import { expertQuestions } from "../shared/expertQuestions";
import { questions } from "../shared/questions";

describe("Expert Mode Feature", () => {
  describe("Expert Mode Scoring", () => {
    it("should apply 1.5x multiplier to expert mode scores", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 10 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 20 },
        { questionId: "q3", answerId: "a3", isCorrect: false, timeSpent: 25 },
      ];

      const normalScore = calculateScore(answers, false);
      const expertScore = calculateScore(answers, true);

      // Normal: (100 + 20 for 10s<30s) + (100 + 20 for 20s<30s) + 0 = 240
      expect(normalScore).toBe(240);

      // Expert: (100 + 20 for 10s<15s) + (100 + 0 for 20s>15s) + 0 = 220, then * 1.5 = 330
      expect(expertScore).toBe(330);
    });

    it("should use 15 second threshold for expert mode speed bonus", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 12 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 16 },
      ];

      const expertScore = calculateScore(answers, true);

      // Expert: (100 + 20) + (100 + 0) = 220, then * 1.5 = 330
      expect(expertScore).toBe(330);
    });

    it("should use 30 second threshold for normal mode speed bonus", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 25 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 35 },
      ];

      const normalScore = calculateScore(answers, false);

      // Normal: (100 + 20) + (100 + 0) = 220
      expect(normalScore).toBe(220);
    });
  });

  describe("Expert Mode Question Selection", () => {
    it("should select hard difficulty questions for expert mode", () => {
      const selected = selectGameQuestions(expertQuestions, "hard");

      expect(selected).toHaveLength(9);
      expect(selected.every((q) => q.difficulty === "hard")).toBe(true);
    });

    it("should select from all difficulty levels for normal mode", () => {
      const selected = selectGameQuestions(questions);

      expect(selected).toHaveLength(9);
      // Should have 3 questions per round
      const round1 = selected.filter((q) => q.round === 1);
      const round2 = selected.filter((q) => q.round === 2);
      const round3 = selected.filter((q) => q.round === 3);

      expect(round1).toHaveLength(3);
      expect(round2).toHaveLength(3);
      expect(round3).toHaveLength(3);
    });

    it("should have 24 expert mode questions (8 per round)", () => {
      const round1 = expertQuestions.filter((q) => q.round === 1);
      const round2 = expertQuestions.filter((q) => q.round === 2);
      const round3 = expertQuestions.filter((q) => q.round === 3);

      expect(round1.length).toBeGreaterThanOrEqual(8);
      expect(round2.length).toBeGreaterThanOrEqual(8);
      expect(round3.length).toBeGreaterThanOrEqual(8);
    });

    it("all expert questions should be marked as hard difficulty", () => {
      const allHard = expertQuestions.every((q) => q.difficulty === "hard");
      expect(allHard).toBe(true);
    });
  });

  describe("Expert Mode Final Score", () => {
    it("should include isExpertMode flag in final score", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 10 },
      ];
      const startTime = Date.now() - 5000; // 5 seconds ago

      const finalScore = calculateFinalScore(answers, startTime, true);

      expect(finalScore.isExpertMode).toBe(true);
    });

    it("should calculate correct final score for expert mode", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 10 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 12 },
        { questionId: "q3", answerId: "a3", isCorrect: true, timeSpent: 14 },
      ];
      const startTime = Date.now() - 5000;

      const finalScore = calculateFinalScore(answers, startTime, true);

      // All correct with speed bonus (all < 15s): (100+20) * 3 = 360, then * 1.5 = 540
      expect(finalScore.totalScore).toBe(540);
      expect(finalScore.accuracy).toBe(100);
      expect(finalScore.isExpertMode).toBe(true);
    });

    it("should have higher scores in expert mode than normal mode for same answers", () => {
      const answers = [
        { questionId: "q1", answerId: "a1", isCorrect: true, timeSpent: 20 },
        { questionId: "q2", answerId: "a2", isCorrect: true, timeSpent: 25 },
        { questionId: "q3", answerId: "a3", isCorrect: true, timeSpent: 28 },
      ];
      const startTime = Date.now() - 5000;

      const normalScore = calculateFinalScore(answers, startTime, false);
      const expertScore = calculateFinalScore(answers, startTime, true);

      // Normal: all under 30s so all get speed bonus: (100+20)*3 = 360
      // Expert: all over 15s so no speed bonus: (100+0)*3 = 300, then * 1.5 = 450
      expect(expertScore.totalScore).toBeGreaterThan(normalScore.totalScore);
      expect(expertScore.totalScore).toBe(450);
    });
  });

  describe("Expert Mode Content", () => {
    it("should have bilingual content for all expert questions", () => {
      expertQuestions.forEach((q) => {
        expect(q.title).toBeDefined();
        expect(q.titlePt).toBeDefined();
        expect(q.scenario).toBeDefined();
        expect(q.scenarioPt).toBeDefined();
        expect(q.explanation).toBeDefined();
        expect(q.explanationPt).toBeDefined();
      });
    });

    it("should have scientifically advanced topics in expert questions", () => {
      const advancedTopics = [
        "multi_signal",
        "pathway",
        "isoform",
        "temporal",
        "stromal",
        "batch",
        "fusion",
        "single_cell",
        "metabolic",
        "autophagy",
        "ketone",
        "amino_acid",
        "lipid",
        "redox",
        "ferroptosis",
        "liquid_biopsy",
        "immunoscore",
        "TMB",
        "proteomics",
        "spatial",
        "longitudinal",
        "AI",
        "multi_omics",
      ];

      const expertTopics = expertQuestions.flatMap((q) => q.tags);
      const hasAdvancedTopics = advancedTopics.some((topic) =>
        expertTopics.some((t) => t.toLowerCase().includes(topic.toLowerCase()))
      );

      expect(hasAdvancedTopics).toBe(true);
    });
  });
});
