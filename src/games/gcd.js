import { makeRandom, cons } from '../index';
import runGame from '../brainlib';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  let gcd = a > b ? b : a;
  while (a % gcd !== 0 || b % gcd !== 0) gcd -= 1;
  return gcd;
};

const game = () => {
  const firstNum = makeRandom();
  const secondNum = makeRandom();
  const question = `${firstNum} ${secondNum}`;
  const answer = findGCD(firstNum, secondNum);
  const gameData = cons(question, answer);
  return gameData;
};

const gameGCD = () => {
  runGame(description, game);
};

export default gameGCD;
