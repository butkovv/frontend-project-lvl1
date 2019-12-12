import { makeRandom, pairs } from '../index';
import launchGame from '../brainlib';

const description = 'What is the result of the expression?';
const operations = [pairs.cons((x, y) => x + y, '+'), pairs.cons((x, y) => x - y, '-'), pairs.cons((x, y) => x * y, '*')];

const generateGameData = () => {
  const a = makeRandom();
  const b = makeRandom();
  const operationsIndex = makeRandom(0, operations.length - 1);
  const operation = pairs.car(operations[operationsIndex]);
  const operationSymbol = pairs.cdr(operations[operationsIndex]);
  const question = `${a} ${operationSymbol} ${b}`;
  const answer = operation(a, b);
  const gameData = pairs.cons(question, answer);
  return gameData;
};

const gameCalc = () => {
  launchGame(description, generateGameData);
};

export default gameCalc;
