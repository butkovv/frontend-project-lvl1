import { makeRandom } from '../index';
import {
  displayQuestion, checkAnswer, runGame,
} from '../brainlib';

const description = 'Find the greatest common divisor of given numbers.';

const gameRound = () => {
  const a = makeRandom();
  const b = makeRandom();
  const question = `${a} ${b}`;
  // Находим число, делящее a и b без остатка.
  // Перебираем значения от наименьшего из a и b до 1.
  let gcd = a > b ? b : a;
  while (a % gcd !== 0 || b % gcd !== 0) gcd -= 1;

  displayQuestion(question);

  if (checkAnswer(String(gcd)) === true) gameRound();
};

const gameGCD = () => {
  runGame(description, gameRound);
};

export default gameGCD;
