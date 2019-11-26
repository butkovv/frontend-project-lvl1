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

  const sum = () => {
    result = a + b;
    question = `${a} + ${b}`;
  };

  const dif = () => {
    result = a - b;
    question = `${a} - ${b}`;
  };

  const mult = () => {
    result = a * b;
    question = `${a} * ${b}`;
  };

  const operations = [sum, dif, mult];
  const operator = makeRandom(operations.length - 1, 0);
  operations[operator]();

  displayQuestion(question);

  if (checkAnswer(String(result)) === true) gameRound();
};

const gameCalc = () => {
  runGame(description, gameRound);
};

export default gameCalc;
