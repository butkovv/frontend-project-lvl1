import { makeRandom } from '../index';
import {
  displayQuestion, checkAnswer, runGame,
} from '../brainlib';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenCheck = (num) => {
  const remainder = num % 2;
  return remainder === 0 ? 'yes' : 'no';
};

const gameRound = () => {
  const number = makeRandom();
  displayQuestion(number);
  if (checkAnswer(evenCheck(number)) === true) gameRound();
};

const gameEven = () => {
  runGame(description, gameRound);
};

export default gameEven;
