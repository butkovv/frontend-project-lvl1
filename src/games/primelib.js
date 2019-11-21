import { makeRandom } from '../index';
import {
  displayIntro, displayQuestion, checkAnswer, displayEnding,
} from '../brainlib';

const gamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameRound = () => {
    const upperLimit = 10000; // Задаем максимальное значение генерируемого числа
    let n = makeRandom(upperLimit); // Генерируем случайное число в заданных пределах
    const divisors = [];
    const uniqueDivisors = [];
    let f = 2; // Начальное значение делителя для алгоритма поиска

    displayQuestion(n);

    // Реализуем алгоритм поиска делителей числа n с добавлением их в массив divisors
    while (n > 1) {
      if (n % f === 0) {
        divisors.push(f);
        n /= f;
      } else f += 1;
    }
    // Заполняем массив uniqueDivisors уникальными значениями из массива divisors
    for (let i = 0; i < divisors.length; i += 1) {
      if (divisors[i] !== divisors[i - 1]) uniqueDivisors.push(divisors[i]);
    }

    const isPrime = uniqueDivisors.length === 1 ? 'yes' : 'no';

    if (checkAnswer(isPrime) === true) gameRound();
  };

  displayIntro(description);

  gameRound();

  displayEnding();
};

export default gamePrime;
