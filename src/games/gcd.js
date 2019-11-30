import { makeRandom } from '../index';
import {
  displayQuestion, checkAnswer, runGame,
} from '../brainlib';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  let gcd = a > b ? b : a;
  while (a % gcd !== 0 || b % gcd !== 0) gcd -= 1;
  return gcd;
};

const gameRound = () => {
  const firstNum = makeRandom();
  const secondNum = makeRandom();
  const question = `${firstNum} ${secondNum}`;
  const answer = findGCD(firstNum, secondNum);
  displayQuestion(question);

  if (checkAnswer(String(answer)) === true) gameRound();
};

const gameGCD = () => {
  runGame(description, gameRound);
};

export default gameGCD;
