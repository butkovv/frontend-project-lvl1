import { makeRandom } from '../index';
import {
  displayIntro, displayQuestion, checkAnswer, displayEnding,
} from '../brainlib';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameRound = () => {
  const upperLimit = 10000;
  let number = makeRandom(upperLimit);
  const divisors = [];
  const uniqueDivisors = [];
  let div = 2;

  displayQuestion(number);

  while (number > 1) {
    if (number % div === 0) {
      divisors.push(div);
      number /= div;
    } else div += 1;
  }

  for (let i = 0; i < divisors.length; i += 1) {
    if (divisors[i] !== divisors[i - 1]) uniqueDivisors.push(divisors[i]);
  }

  const isPrime = uniqueDivisors.length === 1 ? 'yes' : 'no';

  if (checkAnswer(isPrime) === true) gameRound();
};

const gamePrime = () => {
  displayIntro(description);

  gameRound();

  displayEnding();
};

export default gamePrime;
