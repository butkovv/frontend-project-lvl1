import { makeRandom } from '../index';
import {
  displayIntro, displayQuestion, checkAnswer, displayEnding,
} from '../brainlib';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const gameRound = () => {
    const number = makeRandom();
    const remainder = number % 2;
    displayQuestion(number);
    const result = remainder === 0 ? 'yes' : 'no';
    if (checkAnswer(result) === true) gameRound();
  };

  displayIntro(description);

  gameRound();

  displayEnding();
};

export default gameEven;
