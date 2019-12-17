import { cons, car, cdr } from '@hexlet/pairs';
import { makeRandom } from '../index';
import launchGame from '../brainlib';

const description = 'What is the result of the expression?';
const operations = [cons((x, y) => x + y, '+'),
  cons((x, y) => x - y, '-'),
  cons((x, y) => x * y, '*')];

const generateGameData = () => {
  const a = makeRandom();
  const b = makeRandom();
  const operationsIndex = makeRandom(0, operations.length - 1);
  const operation = car(operations[operationsIndex]);
  const operationSign = cdr(operations[operationsIndex]);
  const question = `${a} ${operationSign} ${b}`;
  const answer = operation(a, b);
  return cons(question, answer);
};

export default () => launchGame(description, generateGameData);
