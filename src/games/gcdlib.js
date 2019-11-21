import { makeRandom } from '../index';
import {
  displayIntro, displayQuestion, checkAnswer, displayEnding,
} from '../brainlib';

const gameGCD = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const gameRound = () => {
    const a = makeRandom();
    const b = makeRandom();
    const question = `${a} ${b}`;
    // Находим число, делящее a и b без остатка.
    // Перебираем значения от наименьшего из a и b до 1.
    let i = a > b ? b : a;
    while (a % i !== 0 || b % i !== 0) i -= 1;

    displayQuestion(question);

    if (checkAnswer(String(i)) === true) gameRound();
  };

  displayIntro(description);

  gameRound();

  displayEnding();
};

export default gameGCD;
