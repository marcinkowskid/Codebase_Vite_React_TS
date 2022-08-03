import { QuestionCardProps } from './index.d';

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  callbackFn,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div>
      <p className='number'>
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button value={answer} disabled={userAnswer} onClick={callbackFn}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
