import { makeRandom, pairs } from '../index';
import launchGame from '../brainlib';

const description = 'What is the result of the expression?';
const operations = [pairs.cons((x, y) => x + y, '+'),
  pairs.cons((x, y) => x - y, '-'),
  pairs.cons((x, y) => x * y, '*')];

const generateGameData = () => {
  const a = makeRandom();
  const b = makeRandom();
  const operationsIndex = makeRandom(0, operations.length - 1);
  const operation = pairs.car(operations[operationsIndex]);
  const operationSign = pairs.cdr(operations[operationsIndex]);
  const question = `${a} ${operationSign} ${b}`;
  const answer = operation(a, b);
  return pairs.cons(question, answer);
};

export default () => launchGame(description, generateGameData);
