import { makeRandom, pairs } from '../index';
import launchGame from '../brainlib';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  let gcd = a > b ? b : a;
  while (a % gcd !== 0 || b % gcd !== 0) gcd -= 1;
  return gcd;
};

const generateGameData = () => {
  const x = makeRandom();
  const y = makeRandom();
  const question = `${x} ${y}`;
  const answer = findGCD(x, y);
  return pairs.cons(question, answer);
};

export default () => launchGame(description, generateGameData);
