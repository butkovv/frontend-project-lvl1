import { cons, car, cdr } from '@hexlet/pairs';
import { makeRandom } from '../index';
import launchGame from '../engine';

const description = 'What is the result of the expression?';
const operations = [
  cons((x, y) => x + y, '+'),
  cons((x, y) => x - y, '-'),
  cons((x, y) => x * y, '*'),
];

const generateGameData = () => {
  const a = makeRandom();
  const b = makeRandom();
  const operationsIndex = makeRandom(0, operations.length - 1);
  const operation = car(operations[operationsIndex]);
  const sign = cdr(operations[operationsIndex]);
  const question = `${a} ${sign} ${b}`;
  const answer = operation(a, b);
  return cons(question, answer);
};

export default () => launchGame(description, generateGameData);
