import { makeRandom } from '../index';

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
  console.log(`Question:${output}`);
  return result;
};

export default gameRound;
