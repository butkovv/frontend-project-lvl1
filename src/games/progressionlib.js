import { makeRandom } from '../index';
import {
  displayIntro, displayQuestion, checkAnswer, displayEnding,
} from '../brainlib';

const gameProgression = () => {
  const description = 'What number is missing in the progression?';

  const gameRound = () => {
    // Исходное значение
    let value = makeRandom();
    // Шаг прогрессии
    const increment = makeRandom();
    const progressionLength = 10;
    // Позиция, которая будет пропущена
    const missingPosition = makeRandom(progressionLength);
    let result;
    let output = '';
    // Цикл для записи прогрессии в виде строки
    for (let i = 1; i <= progressionLength; i += 1) {
      if (i === missingPosition) {
        output += ' ..';
        result = value; // Сохраняем пропущенное значение в качестве ответа
      } else output += ` ${value}`;
      value += increment;
    }

    displayQuestion(output);

    if (checkAnswer(String(result)) === true) gameRound();
  };

  displayIntro(description);

  gameRound();

  displayEnding();
};

export default gameProgression;
