import { describe, it, expect } from "vitest";
import { randomizeAnswerOptions } from "@shared/answerRandomizer";
import { questions } from "@shared/questions";

describe("Randomizer Debug", () => {
  it("should randomize answer options for the first question", () => {
    const q = questions[0];
    console.log("Original question:", q.id);
    console.log("Original answers:", q.answerOptions.map((a) => a.id));

    const randomized = randomizeAnswerOptions(q);
    console.log("Randomized answers:", randomized.randomizedAnswerOptions.map((a) => a.id));

    expect(randomized.randomizedAnswerOptions.length).toBe(3);
    expect(randomized.correctAnswerId).toBe(q.correctAnswerId);
  });

  it("should randomize multiple times and show different orders", () => {
    const q = questions[0];
    const orders: string[][] = [];

    for (let i = 0; i < 10; i++) {
      const randomized = randomizeAnswerOptions(q);
      const order = randomized.randomizedAnswerOptions.map((a) => a.id);
      orders.push(order);
      console.log(`Randomization ${i + 1}:`, order.join(","));
    }

    // Check if we got at least 2 different orders
    const uniqueOrders = new Set(orders.map((o) => o.join(",")));
    console.log(`Got ${uniqueOrders.size} unique orders out of 10`);
    expect(uniqueOrders.size).toBeGreaterThan(1);
  });

  it("should show answer positions for questions 1-9", () => {
    for (let i = 0; i < 9; i++) {
      const q = questions[i];
      const randomized = randomizeAnswerOptions(q);
      const positions = randomized.randomizedAnswerOptions.map((a) => a.id);
      console.log(`Q${i + 1} (${q.id}): ${positions.join(" -> ")}`);
    }
  });
});
