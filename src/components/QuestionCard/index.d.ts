import { AnswerObject } from './../../App.d';

export type QuestionCardProps = {
  question: string;
  answers: string[];
  callbackFn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};
