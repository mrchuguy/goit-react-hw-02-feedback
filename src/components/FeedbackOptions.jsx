import { BtnWrap, Button } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrap>
      {Object.keys(options).map(option => (
        <Button key={nanoid()} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </BtnWrap>
  );
};
