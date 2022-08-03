import React, { useState } from 'react';
// API call function
import { fetchQuizQuestions } from './API';

// Components
import QuestionCard from './components/QuestionCard';

// Types
import { Difficulty, QuestionsState } from './API';
import { AnswerObject } from './App.d';

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
    console.log(e);
  };

  const nextQuestion = () => {};

  return (
    <div className='App'>
      <h1>Books Quiz</h1>
      {(gameOver || userAnswers.length === totalQuestions) && (
        <button className='start' onClick={startQuiz}>
          Start the Trivia Quiz
        </button>
      )}
      {!gameOver && <p className='score'>Score:</p>}
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
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
