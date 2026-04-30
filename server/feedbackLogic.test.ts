import { describe, it, expect } from "vitest";
import { questions } from "@shared/questions";
import { expertQuestions } from "@shared/expertQuestions";
import { beginnerQuestions } from "@shared/beginnerQuestions";

describe("Feedback Logic", () => {
  describe("Question Structure", () => {
    it("should have explanation field for all questions", () => {
      const allQuestions = [...questions, ...expertQuestions, ...beginnerQuestions];
      allQuestions.forEach((q) => {
        expect(q.explanation).toBeDefined();
        expect(typeof q.explanation).toBe("string");
        expect(q.explanation.length).toBeGreaterThan(0);
      });
    });

    it("should have explanationPt field for all questions", () => {
      const allQuestions = [...questions, ...expertQuestions, ...beginnerQuestions];
      allQuestions.forEach((q) => {
        expect(q.explanationPt).toBeDefined();
        expect(typeof q.explanationPt).toBe("string");
        expect(q.explanationPt.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Wrong Answer Explanations", () => {
    it("Q1 (r1q3) should have wrongAnswerExplanation", () => {
      const q1 = questions.find((q) => q.id === "r1q3");
      expect(q1).toBeDefined();
      expect(q1?.wrongAnswerExplanation).toBeDefined();
      expect(q1?.wrongAnswerExplanation?.length).toBeGreaterThan(0);
    });

    it("Q1 (r1q3) wrongAnswerExplanation should NOT start with 'Excellent'", () => {
      const q1 = questions.find((q) => q.id === "r1q3");
      expect(q1?.wrongAnswerExplanation).toBeDefined();
      expect(q1?.wrongAnswerExplanation).not.toMatch(/^Excellent/);
    });

    it("Q1 (r1q3) wrongAnswerExplanation should address why the answer is wrong", () => {
      const q1 = questions.find((q) => q.id === "r1q3");
      const explanation = q1?.wrongAnswerExplanation || "";
      expect(explanation).toContain("ambiguous");
      expect(explanation).toContain("overconfident");
    });

    it("Q6 (r1q6) should have wrongAnswerExplanation", () => {
      const q6 = questions.find((q) => q.id === "r1q6");
      expect(q6).toBeDefined();
      expect(q6?.wrongAnswerExplanation).toBeDefined();
      expect(q6?.wrongAnswerExplanation?.length).toBeGreaterThan(0);
    });

    it("Q6 (r1q6) explanation should start with 'Correct' (not 'Excellent')", () => {
      const q6 = questions.find((q) => q.id === "r1q6");
      expect(q6?.explanation).toBeDefined();
      expect(q6?.explanation).toMatch(/^Correct/);
    });

    it("Q6 (r1q6) wrongAnswerExplanation should NOT start with 'Correct'", () => {
      const q6 = questions.find((q) => q.id === "r1q6");
      expect(q6?.wrongAnswerExplanation).toBeDefined();
      expect(q6?.wrongAnswerExplanation).not.toMatch(/^Correct/);
    });

    it("Q6 (r1q6) wrongAnswerExplanation should address the conflicting signals", () => {
      const q6 = questions.find((q) => q.id === "r1q6");
      const explanation = q6?.wrongAnswerExplanation || "";
      expect(explanation).toContain("conflicting");
      expect(explanation).toContain("analysis");
    });
  });

  describe("Feedback Tone Consistency", () => {
    it("should not praise wrong answers in normal questions", () => {
      const allQuestions = [...questions, ...expertQuestions, ...beginnerQuestions];
      allQuestions.forEach((q) => {
        if (q.wrongAnswerExplanation) {
          // Wrong answer explanations should not start with praise
          expect(q.wrongAnswerExplanation).not.toMatch(/^(Excellent|Correct|Good choice|Well done)/i);
        }
      });
    });

    it("correct answer explanations should be appropriate for correct answers", () => {
      const allQuestions = [...questions, ...expertQuestions, ...beginnerQuestions];
      allQuestions.forEach((q) => {
        // Most correct explanations should acknowledge the correct answer
        const explanation = q.explanation.toLowerCase();
        expect(explanation.length).toBeGreaterThan(10);
      });
    });
  });

  describe("Portuguese Translations", () => {
    it("Q1 (r1q3) should have wrongAnswerExplanationPt", () => {
      const q1 = questions.find((q) => q.id === "r1q3");
      expect(q1?.wrongAnswerExplanationPt).toBeDefined();
      expect(q1?.wrongAnswerExplanationPt?.length).toBeGreaterThan(0);
    });

    it("Q6 (r1q6) should have wrongAnswerExplanationPt", () => {
      const q6 = questions.find((q) => q.id === "r1q6");
      expect(q6?.wrongAnswerExplanationPt).toBeDefined();
      expect(q6?.wrongAnswerExplanationPt?.length).toBeGreaterThan(0);
    });

    it("Portuguese explanations should not start with 'Excelente' for wrong answers", () => {
      const allQuestions = [...questions, ...expertQuestions, ...beginnerQuestions];
      allQuestions.forEach((q) => {
        if (q.wrongAnswerExplanationPt) {
          expect(q.wrongAnswerExplanationPt).not.toMatch(/^(Excelente|Correto|Boa escolha)/i);
        }
      });
    });
  });
});
