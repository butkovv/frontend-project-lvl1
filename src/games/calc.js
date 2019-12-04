import {
  makeRandom, cons, car, cdr,
} from '../index';
import runGame from '../brainlib';

const description = 'What is the result of the expression?';

const generateGameData = () => {
  const a = makeRandom();
  const b = makeRandom();
  const sumOperation = (x, y) => x + y;
  const difOperation = (x, y) => x - y;
  const multOperation = (x, y) => x * y;
  const sum = cons(sumOperation, '+');
  const dif = cons(difOperation, '-');
  const mult = cons(multOperation, '*');
  const operations = [sum, dif, mult];
  const operation = makeRandom(operations.length - 1, 0);
  const question = `${a} ${cdr(operations[operation])} ${b}`;
  const answer = car(operations[operation])(a, b);
  const gameData = cons(question, answer);
  return gameData;
};

const gameCalc = () => {
  runGame(description, generateGameData);
};

export default gameCalc;
