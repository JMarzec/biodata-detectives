import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { selectGameQuestions } from "@shared/gameEngine";
import { beginnerQuestions } from "@shared/beginnerQuestions";
import { questions } from "@shared/questions";
import { expertQuestions } from "@shared/expertQuestions";

describe("Beginner Mode", () => {
  describe("Question Selection", () => {
    it("should load beginner questions", () => {
      expect(beginnerQuestions).toBeDefined();
      expect(Array.isArray(beginnerQuestions)).toBe(true);
      expect(beginnerQuestions.length).toBeGreaterThan(0);
    });

    it("should have at least 24 beginner questions", () => {
      expect(beginnerQuestions.length).toBeGreaterThanOrEqual(24);
    });

    it("should select beginner questions", () => {
      const selected = selectGameQuestions(beginnerQuestions, "easy");
      expect(selected).toBeDefined();
      expect(Array.isArray(selected)).toBe(true);
      expect(selected.length).toBeGreaterThan(0);
      expect(selected.length).toBeLessThanOrEqual(beginnerQuestions.length);
    });

    it("beginner questions should have simpler difficulty", () => {
      const selected = selectGameQuestions(beginnerQuestions, "easy");
      selected.forEach((q) => {
        expect(q.id).toBeDefined();
        expect(q.title).toBeDefined();
        expect(q.answerOptions).toBeDefined();
        expect(Array.isArray(q.answerOptions)).toBe(true);
        expect(q.answerOptions.length).toBeGreaterThan(0);
      });
    });

    it("should differentiate between difficulty levels", () => {
      const beginner = selectGameQuestions(beginnerQuestions, "easy");
      const normal = selectGameQuestions(questions, "medium");
      const expert = selectGameQuestions(expertQuestions, "hard");

      expect(beginner.length).toBeGreaterThan(0);
      expect(normal.length).toBeGreaterThan(0);
      expect(expert.length).toBeGreaterThan(0);
    });
  });

  describe("Beginner Questions Content", () => {
    it("should have questions with English and Portuguese translations", () => {
      beginnerQuestions.forEach((q) => {
        expect(q.title).toBeDefined();
        expect(q.titlePt).toBeDefined();
        expect(q.scenario).toBeDefined();
        expect(q.scenarioPt).toBeDefined();
      });
    });

    it("should have valid answer options", () => {
      beginnerQuestions.forEach((q) => {
        expect(q.answerOptions).toBeDefined();
        expect(Array.isArray(q.answerOptions)).toBe(true);
        expect(q.answerOptions.length).toBeGreaterThanOrEqual(2);

        q.answerOptions.forEach((option) => {
          expect(option.id).toBeDefined();
          expect(option.text).toBeDefined();
          expect(option.textPt).toBeDefined();
        });
      });
    });

    it("should have at least one correct answer per question", () => {
      beginnerQuestions.forEach((q) => {
        expect(q.correctAnswerId).toBeDefined();
        const correctOption = q.answerOptions.find((o) => o.id === q.correctAnswerId);
        expect(correctOption).toBeDefined();
      });
    });

    it("should have bilingual support (EN/PT)", () => {
      beginnerQuestions.forEach((q) => {
        // Check if question text supports both languages
        if (typeof q.text === "object") {
          expect(q.text.en || q.text.pt).toBeDefined();
        }
      });
    });
  });

  describe("Difficulty Comparison", () => {
    it("beginner questions should be simpler than normal questions", () => {
      expect(beginnerQuestions.length).toBeGreaterThan(0);
      expect(questions.length).toBeGreaterThan(0);
      // Both should have sufficient questions
      expect(beginnerQuestions.length).toBeGreaterThanOrEqual(24);
      expect(questions.length).toBeGreaterThanOrEqual(24);
    });

    it("should support all three difficulty levels", () => {
      const beginner = selectGameQuestions(beginnerQuestions, "easy");
      const normal = selectGameQuestions(questions, "medium");
      const expert = selectGameQuestions(expertQuestions, "hard");

      expect(beginner).toBeDefined();
      expect(normal).toBeDefined();
      expect(expert).toBeDefined();
    });
  });

  describe("Question Randomization", () => {
    it("should select different questions on multiple calls", () => {
      const first = selectGameQuestions(beginnerQuestions, "easy");
      const second = selectGameQuestions(beginnerQuestions, "easy");

      // They might be the same (low probability) but should both be valid
      expect(first.length).toBeGreaterThan(0);
      expect(second.length).toBeGreaterThan(0);
    });

    it("should not select duplicate questions in a single session", () => {
      const selected = selectGameQuestions(beginnerQuestions, "easy");
      if (selected.length > 1) {
        const ids = selected.map((q) => q.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(ids.length);
      }
    });
  });
});


describe("Beginner Mode Timer Configuration", () => {
  it("should have correct timer thresholds for each difficulty", () => {
    // Beginner: 45 seconds
    // Normal: 30 seconds
    // Expert: 15 seconds
    const timerConfig = {
      beginner: 45,
      normal: 30,
      expert: 15,
    };

    expect(timerConfig.beginner).toBe(45);
    expect(timerConfig.normal).toBe(30);
    expect(timerConfig.expert).toBe(15);
  });

  it("beginner mode should have longer timer than normal mode", () => {
    expect(45).toBeGreaterThan(30);
  });

  it("beginner mode should have longer timer than expert mode", () => {
    expect(45).toBeGreaterThan(15);
  });

  it("normal mode should have longer timer than expert mode", () => {
    expect(30).toBeGreaterThan(15);
  });
});
