import { makeRandom } from '../index';
import {
  displayQuestion, checkAnswer, runGame,
} from '../brainlib';

const description = 'What is the result of the expression?';

const gameRound = () => {
  const a = makeRandom();
  const b = makeRandom();
  let question = '';

  const sum = (x, y) => {
    question = `${x} + ${y}`;
    return x + y;
  };

  const dif = (x, y) => {
    question = `${x} - ${y}`;
    return x - y;
  };

  const mult = (x, y) => {
    question = `${x} * ${y}`;
    return x * y;
  };

  const operations = [sum, dif, mult];
  const operator = makeRandom(operations.length - 1, 0);
  const answer = operations[operator](a, b);

  displayQuestion(question);

  if (checkAnswer(String(answer)) === true) gameRound();
};

const gameCalc = () => {
  runGame(description, gameRound);
};

export default gameCalc;
