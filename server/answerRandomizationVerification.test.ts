import { describe, it, expect } from "vitest";
import { randomizeAnswerOptions } from "@shared/answerRandomizer";
import { beginnerQuestions } from "@shared/beginnerQuestions";
import { expertQuestions } from "@shared/expertQuestions";
import { questions } from "@shared/questions";

describe("Answer Randomization Verification", () => {
  describe("Beginner Questions Randomization", () => {
    it("should randomize answer positions for beginner questions", () => {
      const question = beginnerQuestions[0];
      
      // Randomize the same question multiple times
      const randomizations = Array.from({ length: 10 }, () => 
        randomizeAnswerOptions(question)
      );

      // Check that we get different orderings (at least some variation)
      const orderings = randomizations.map(r => 
        r.randomizedAnswerOptions.map(opt => opt.id).join(",")
      );

      // Count unique orderings
      const uniqueOrderings = new Set(orderings);
      
      // With 3 options, there are 6 possible permutations
      // We should see at least 2-3 different orderings in 10 tries
      expect(uniqueOrderings.size).toBeGreaterThanOrEqual(2);
    });

    it("should preserve correctness after randomization", () => {
      const question = beginnerQuestions[0];
      const originalCorrectOption = question.answerOptions.find(
        opt => opt.id === question.correctAnswerId
      );

      // Randomize multiple times
      for (let i = 0; i < 5; i++) {
        const randomized = randomizeAnswerOptions(question);
        
        // Find the correct answer in randomized options
        const correctOption = randomized.randomizedAnswerOptions.find(
          opt => opt.id === randomized.correctAnswerId
        );

        // The correct option content should match the original
        expect(correctOption?.text).toBe(originalCorrectOption?.text);
      }
    });

    it("should have varied correct answer positions across randomizations", () => {
      const question = beginnerQuestions[0];
      
      // Randomize many times and track correct answer positions
      const correctPositions = Array.from({ length: 20 }, () => {
        const randomized = randomizeAnswerOptions(question);
        return randomized.randomizedAnswerOptions.findIndex(
          opt => opt.id === randomized.correctAnswerId
        );
      });

      // Should have at least 2 different positions for the correct answer
      const uniquePositions = new Set(correctPositions);
      expect(uniquePositions.size).toBeGreaterThanOrEqual(2);
    });
  });

  describe("Expert Questions Randomization", () => {
    it("should randomize answer positions for expert questions", () => {
      const question = expertQuestions[0];
      
      const randomizations = Array.from({ length: 10 }, () => 
        randomizeAnswerOptions(question)
      );

      const orderings = randomizations.map(r => 
        r.randomizedAnswerOptions.map(opt => opt.id).join(",")
      );

      const uniqueOrderings = new Set(orderings);
      expect(uniqueOrderings.size).toBeGreaterThanOrEqual(2);
    });

    it("should have varied correct answer positions for expert questions", () => {
      const question = expertQuestions[5];
      
      const correctPositions = Array.from({ length: 20 }, () => {
        const randomized = randomizeAnswerOptions(question);
        return randomized.randomizedAnswerOptions.findIndex(
          opt => opt.id === randomized.correctAnswerId
        );
      });

      const uniquePositions = new Set(correctPositions);
      expect(uniquePositions.size).toBeGreaterThanOrEqual(2);
    });
  });

  describe("Normal Questions Randomization", () => {
    it("should randomize answer positions for normal questions", () => {
      const question = questions[0];
      
      const randomizations = Array.from({ length: 10 }, () => 
        randomizeAnswerOptions(question)
      );

      const orderings = randomizations.map(r => 
        r.randomizedAnswerOptions.map(opt => opt.id).join(",")
      );

      const uniqueOrderings = new Set(orderings);
      expect(uniqueOrderings.size).toBeGreaterThanOrEqual(2);
    });
  });

  describe("Answer Distribution Across All Difficulty Levels", () => {
    it("beginner questions should have varied correct answer IDs", () => {
      const correctIds = beginnerQuestions.map(q => q.correctAnswerId);
      const uniqueIds = new Set(correctIds);
      
      // Should have all three answer options as correct at some point
      expect(uniqueIds.size).toBe(3);
      expect(uniqueIds.has("a1")).toBe(true);
      expect(uniqueIds.has("a2")).toBe(true);
      expect(uniqueIds.has("a3")).toBe(true);
    });

    it("expert questions should have varied correct answer IDs", () => {
      const correctIds = expertQuestions.map(q => q.correctAnswerId);
      const uniqueIds = new Set(correctIds);
      
      // Should have all three answer options as correct at some point
      expect(uniqueIds.size).toBe(3);
      expect(uniqueIds.has("a1")).toBe(true);
      expect(uniqueIds.has("a2")).toBe(true);
      expect(uniqueIds.has("a3")).toBe(true);
    });

    it("normal questions should have varied correct answer IDs", () => {
      const correctIds = questions.map(q => q.correctAnswerId);
      const uniqueIds = new Set(correctIds);
      
      // Should have all three answer options as correct at some point
      expect(uniqueIds.size).toBe(3);
      expect(uniqueIds.has("a1")).toBe(true);
      expect(uniqueIds.has("a2")).toBe(true);
      expect(uniqueIds.has("a3")).toBe(true);
    });
  });
});
