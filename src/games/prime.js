import { cons } from '@hexlet/pairs';
import { makeRandom } from '../index';
import launchGame from '../engine';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const lowerLimit = 1;
const upperLimit = 10000;

const isPrime = (num) => {
  let divisor = 2;
  if (num < 2) return false;
  while (divisor < num / 2) {
    if (num % divisor === 0) {
      return false;
    } divisor += 1;
  }
  return true;
};

const generateGameData = () => {
  const question = makeRandom(upperLimit, lowerLimit);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => launchGame(description, generateGameData);
