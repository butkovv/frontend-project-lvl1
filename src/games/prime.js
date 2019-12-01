import { makeRandom, cons } from '../index';
import runGame from '../brainlib';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeCheck = (num) => {
  const divisors = [];
  const uniqueDivisors = [];
  let divisor = 2;
  let division = num;

  while (division > 1) {
    if (division % divisor === 0) {
      divisors.push(divisor);
      division /= divisor;
    } else divisor += 1;
  }

  for (let i = 0; i < divisors.length; i += 1) {
    if (divisors[i] !== divisors[i - 1]) uniqueDivisors.push(divisors[i]);
  }

  return uniqueDivisors.length === 1;
};

const game = () => {
  const upperLimit = 10000;
  const question = makeRandom(upperLimit);
  const answer = primeCheck(question) ? 'yes' : 'no';
  const gameData = cons(question, answer);
  return gameData;
};

const gamePrime = () => {
  runGame(description, game);
};

export default gamePrime;
