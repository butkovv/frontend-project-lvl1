import { cons } from '@hexlet/pairs';
import { makeRandom } from '../index';
import launchGame from '../engine';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  const remainder = num % 2;
  return remainder === 0;
};

const generateGameData = () => {
  const question = makeRandom();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => launchGame(description, generateGameData);
