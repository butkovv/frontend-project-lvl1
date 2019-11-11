const gameRound = () => {
  // Исходное значение
  let value = Math.round(Math.random() * 100);
  // Шаг прогрессии
  const increment = Math.round(Math.random() * 100);
  const progressionLength = 10;
  // Позиция, которая будет пропущена
  const missingPosition = Math.floor(Math.random() * progressionLength) + 1;
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
