import { makeRandom, cons } from '../index';
import launchGame from '../brainlib';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  let gcd = a > b ? b : a;
  while (a % gcd !== 0 || b % gcd !== 0) gcd -= 1;
  return gcd;
};

const generateGameData = () => {
  const firstNumber = makeRandom();
  const secondNumber = makeRandom();
  const question = `${firstNumber} ${secondNumber}`;
  const answer = findGCD(firstNumber, secondNumber);
  const gameData = cons(question, answer);
  return gameData;
};

const gameGCD = () => {
  launchGame(description, generateGameData);
};

export default gameGCD;
