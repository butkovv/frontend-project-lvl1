import {
  makeRandom, cons, car, cdr,
} from '../index';
import launchGame from '../brainlib';

const description = 'What is the result of the expression?';
const operations = [cons((x, y) => x + y, '+'), cons((x, y) => x - y, '-'), cons((x, y) => x * y, '*')];

const generateGameData = () => {
  const a = makeRandom();
  const b = makeRandom();
  const operationsIndex = makeRandom(0, operations.length - 1);
  const operation = car(operations[operationsIndex]);
  const operationSymbol = cdr(operations[operationsIndex]);
  const question = `${a} ${operationSymbol} ${b}`;
  const answer = operation(a, b);
  const gameData = cons(question, answer);
  return gameData;
};

const gameCalc = () => {
  launchGame(description, generateGameData);
};

export default gameCalc;
