import { makeRandom, cons } from '../index';
import runGame from '../brainlib';

const description = 'What is the result of the expression?';

const game = () => {
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
  const gameData = cons(question, answer);
  return gameData;
};

const gameCalc = () => {
  runGame(description, game);
};

export default gameCalc;
