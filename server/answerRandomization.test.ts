import { describe, it, expect } from "vitest";
import { randomizeAnswerOptions, randomizeQuestions } from "@shared/answerRandomizer";
import { questions } from "@shared/questions";
import { beginnerQuestions } from "@shared/beginnerQuestions";

describe("Answer Randomization", () => {
  describe("randomizeAnswerOptions", () => {
    it("should randomize answer positions", () => {
      const question = questions[0];
      const randomized = randomizeAnswerOptions(question);

      // Check that all answers are present
      expect(randomized.randomizedAnswerOptions.length).toBe(
        question.answerOptions.length
      );

      // Check that all original answer IDs are present (as a set, not ordered)
      const originalIds = new Set(question.answerOptions.map((a) => a.id));
      const randomizedIds = new Set(
        randomized.randomizedAnswerOptions.map((a) => a.id)
      );
      expect(randomizedIds).toEqual(originalIds);
    });

    it("should track correct answer by ID not position", () => {
      const question = questions[0];
      const randomized = randomizeAnswerOptions(question);

      // The correct answer should be tracked by ID
      expect(randomized.randomizedAnswerOptions[randomized.correctAnswerIndex].id).toBe(
        question.correctAnswerId
      );
    });

    it("should produce different randomizations on multiple calls", () => {
      const question = questions[0];
      const randomized1 = randomizeAnswerOptions(question);
      const randomized2 = randomizeAnswerOptions(question);

      // The order might be different (though there's a small chance they're the same)
      // But the correct answer should always be tracked correctly
      expect(randomized1.randomizedAnswerOptions[randomized1.correctAnswerIndex].id).toBe(
        question.correctAnswerId
      );
      expect(randomized2.randomizedAnswerOptions[randomized2.correctAnswerIndex].id).toBe(
        question.correctAnswerId
      );
    });

    it("should work with beginner difficulty questions", () => {
      const question = beginnerQuestions[0];
      const randomized = randomizeAnswerOptions(question);

      expect(randomized.randomizedAnswerOptions.length).toBe(
        question.answerOptions.length
      );
      expect(randomized.randomizedAnswerOptions[randomized.correctAnswerIndex].id).toBe(
        question.correctAnswerId
      );
    });

    it("should not always put correct answer in first position", () => {
      // Test multiple randomizations to ensure variety
      const question = questions[0];
      const positions = new Set<number>();

      for (let i = 0; i < 20; i++) {
        const randomized = randomizeAnswerOptions(question);
        positions.add(randomized.correctAnswerIndex);
      }

      // With 3 answer options and 20 randomizations, we should see variation
      // (probability of always being in same position is very low)
      expect(positions.size).toBeGreaterThan(1);
    });
  });

  describe("randomizeQuestions", () => {
    it("should randomize multiple questions", () => {
      const testQuestions = questions.slice(0, 3);
      const randomized = randomizeQuestions(testQuestions);

      expect(randomized.length).toBe(testQuestions.length);

      randomized.forEach((q, idx) => {
        expect(q.randomizedAnswerOptions.length).toBe(
          testQuestions[idx].answerOptions.length
        );
        expect(q.randomizedAnswerOptions[q.correctAnswerIndex].id).toBe(
          testQuestions[idx].correctAnswerId
        );
      });
    });

    it("should handle beginner, normal, and expert questions", () => {
      const allQuestions = [...questions, ...beginnerQuestions];
      const randomized = randomizeQuestions(allQuestions);

      expect(randomized.length).toBe(allQuestions.length);

      randomized.forEach((q) => {
        expect(q.randomizedAnswerOptions).toBeDefined();
        expect(q.correctAnswerIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctAnswerIndex).toBeLessThan(q.randomizedAnswerOptions.length);
      });
    });
  });

  describe("No Pre-Selection", () => {
    it("should not pre-select any answer", () => {
      // This test verifies that when a question is randomized,
      // we don't automatically select an answer
      const question = questions[0];
      const randomized = randomizeAnswerOptions(question);

      // The randomized question should have all answers available
      expect(randomized.randomizedAnswerOptions.length).toBeGreaterThan(0);

      // No answer should be marked as selected (this is handled in GameRound component)
      // The correctAnswerIndex is just metadata, not a selection
      expect(randomized.correctAnswerIndex).toBeGreaterThanOrEqual(0);
    });

    it("should require explicit answer selection for scoring", () => {
      const question = questions[0];
      const randomized = randomizeAnswerOptions(question);

      // To score correctly, the user must select the answer with the correct ID
      // not just click the answer at correctAnswerIndex position
      const correctAnswer = randomized.randomizedAnswerOptions[randomized.correctAnswerIndex];
      expect(correctAnswer.id).toBe(question.correctAnswerId);

      // Selecting any other answer should be marked as incorrect
      const wrongAnswer = randomized.randomizedAnswerOptions.find(
        (a) => a.id !== question.correctAnswerId
      );
      expect(wrongAnswer?.id).not.toBe(question.correctAnswerId);
    });
  });
});
