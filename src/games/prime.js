import { makeRandom, pairs } from '../index';
import launchGame from '../brainlib';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const lowerLimit = 1;
const upperLimit = 10000;

const isPrime = (num) => {
  let divisor = 2;
  while (divisor < num) {
    if (num % divisor === 0) {
      return false;
    } divisor += 1;
  }
  return true;
};

const generateGameData = () => {
  const question = makeRandom(upperLimit, lowerLimit);
  const answer = isPrime(question) ? 'yes' : 'no';
  const gameData = pairs.cons(question, answer);
  return gameData;
};

const gamePrime = () => {
  launchGame(description, generateGameData);
};

export default gamePrime;
