import { makeRandom } from '../index';

const gameRound = () => {
  const a = makeRandom();
  const b = makeRandom();
  let result;
  // Генерируем целое число в диапазоне [1; 3] для выбора одного из трех операторов
  const min = 1;
  const max = 3;
  const operator = makeRandom(max, min);
  switch (operator) {
    case 1:
      result = a + b;
      console.log(`Question: ${a} + ${b}`);
      break;
    case 2:
      result = a - b;
      console.log(`Question: ${a} - ${b}`);
      break;
    case 3:
      result = a * b;
      console.log(`Question: ${a} * ${b}`);
      break;
    default:
      break;
  }
  return result;
};

export default gameRound;
