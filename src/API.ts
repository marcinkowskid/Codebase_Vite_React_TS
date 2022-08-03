import { shuffleArray } from './utils';

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState[]> => {
  const endpointUrl = `https://opentdb.com/api.php?amount=${amount}&category=10&difficulty=${difficulty}&type=multiple`;

  const data = await fetch(endpointUrl)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const result = data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));

  return result;
};
