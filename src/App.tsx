import React, { useState } from 'react';
// API call function
import { fetchQuizQuestions } from './API';

// Components
import QuestionCard from './components/QuestionCard';

// Types
import { Difficulty, QuestionsState } from './API';
import { AnswerObject } from './App.d';

// Styles
import { GlobalStyle } from './App.styled';
import * as Styled from './App.styled';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const totalQuestions = 10;

  // Functions
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      totalQuestions,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setUserAnswers([]);
    setScore(0);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User answer
      const userAnswer = e.currentTarget.value;
      // Check answer againt correct answer
      const isCorrect = questions[number].correct_answer === userAnswer;
      // Add score if answer is correct
      if (isCorrect) setScore((prev) => prev + 1);
      // Save answer in the array of user answers
      const answerObject = {
        question: questions[number].question,
        answer: userAnswer,
        correct: isCorrect,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move to the next question if it is not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === totalQuestions) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Styled.Wrapper>
        <Styled.Title>Books Quiz</Styled.Title>
        {(gameOver || userAnswers.length === totalQuestions) && (
          <Styled.Button startButton onClick={startQuiz}>
            Start the Trivia Quiz
          </Styled.Button>
        )}
        {!gameOver && <Styled.Score>Score: {score}</Styled.Score>}
        {loading && <p>Loading Questions...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={totalQuestions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callbackFn={checkAnswer}
          />
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== totalQuestions - 1 && (
            <Styled.Button onClick={nextQuestion}>Next Question</Styled.Button>
          )}
      </Styled.Wrapper>
    </>
  );
};

export default App;
