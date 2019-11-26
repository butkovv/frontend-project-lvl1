import { makeRandom } from '../index';
import {
  displayQuestion, checkAnswer, runGame,
} from '../brainlib';

const description = 'What is the result of the expression?';

const gameRound = () => {
  const a = makeRandom();
  const b = makeRandom();
  let result;
  let question = '';
  const min = 1;
  const max = 3;
  const operator = makeRandom(max, min);
  switch (operator) {
    case 1:
      result = a + b;
      question = `${a} + ${b}`;
      break;
    case 2:
      result = a - b;
      question = `${a} - ${b}`;
      break;
    case 3:
      result = a * b;
      question = `${a} * ${b}`;
      break;
    default:
      break;
  }

  displayQuestion(question);

  if (checkAnswer(String(result)) === true) gameRound();
};

const gameCalc = () => {
  runGame(description, gameRound);
};

export default gameCalc;
