import React from 'react';

// Components
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  const nextQuestion = () => {};

  return (
    <div className='App'>
      <h1>Books Quiz</h1>
      <button className='start' onClick={startQuiz}>
        Start the Trivia Quiz
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
