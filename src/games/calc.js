import {
  makeRandom, cons, car, cdr,
} from '../index';
import launchGame from '../brainlib';

const description = 'What is the result of the expression?';

const generateGameData = () => {
  const a = makeRandom();
  const b = makeRandom();
  const sum = cons((x, y) => x + y, '+');
  const dif = cons((x, y) => x - y, '-');
  const mult = cons((x, y) => x * y, '*');
  const operations = [sum, dif, mult];
  const operation = makeRandom(0, operations.length - 1);
  const question = `${a} ${cdr(operations[operation])} ${b}`;
  const answer = car(operations[operation])(a, b);
  const gameData = cons(question, answer);
  return gameData;
};

const gameCalc = () => {
  launchGame(description, generateGameData);
};

export default gameCalc;
