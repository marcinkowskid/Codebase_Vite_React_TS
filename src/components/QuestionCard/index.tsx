import { QuestionCardProps } from './index.d';

// Styled
import * as Styled from './QuestionCard.styled';

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  callbackFn,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Styled.Wrapper>
      <p className='number'>
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <Styled.ButtonWrapper key={answer}>
            <Styled.Button
              value={answer}
              disabled={!!userAnswer}
              onClick={callbackFn}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </Styled.Button>
          </Styled.ButtonWrapper>
        ))}
      </div>
    </Styled.Wrapper>
  );
};

export default QuestionCard;
