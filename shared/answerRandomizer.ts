/**
 * Utility to randomize answer options while tracking the correct answer ID
 */

import { Question, AnswerOption } from "./questions";

export type RandomizedQuestion = Question & {
  randomizedAnswerOptions: AnswerOption[];
  correctAnswerIndex: number; // Index in the randomized array
};

/**
 * Randomizes the answer options for a question
 * Returns the question with randomized options and the index of the correct answer
 */
export function randomizeAnswerOptions(question: Question): RandomizedQuestion {
  // Create a copy of answer options with their original indices
  const optionsWithIndices = question.answerOptions.map((option, index) => ({
    option,
    originalIndex: index,
  }));

  // Fisher-Yates shuffle
  for (let i = optionsWithIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsWithIndices[i], optionsWithIndices[j]] = [
      optionsWithIndices[j],
      optionsWithIndices[i],
    ];
  }

  // Find the index of the correct answer in the randomized array
  const correctAnswerIndex = optionsWithIndices.findIndex(
    (item) => item.option.id === question.correctAnswerId
  );

  return {
    ...question,
    randomizedAnswerOptions: optionsWithIndices.map((item) => item.option),
    correctAnswerIndex,
  };
}

/**
 * Randomizes multiple questions
 */
export function randomizeQuestions(questions: Question[]): RandomizedQuestion[] {
  return questions.map(randomizeAnswerOptions);
}
