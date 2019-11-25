import { makeRandom } from '../index';
import {
  displayIntro, displayQuestion, checkAnswer, displayEnding,
} from '../brainlib';

const gameRound = () => {
  const a = makeRandom();
  const b = makeRandom();
  let result;
  let question = '';
  // Генерируем целое число в диапазоне [1; 3] для выбора одного из трех операторов
  const min = 1;
  const max = 3;
  const operator = makeRandom(max, min);
  switch (operator) {
    case 1:
      result = a + b;
      question = `${a} + ${b}`;
      break;
    case 2:
      result = a - b;
      question = `${a} - ${b}`;
      break;
    case 3:
      result = a * b;
      question = `${a} * ${b}`;
      break;
    default:
      break;
  }

  displayQuestion(question);

  if (checkAnswer(String(result)) === true) gameRound();
};

const gameCalc = () => {
  const description = 'What is the result of the expression?';

  displayIntro(description);

  gameRound();

  displayEnding();
};

export default gameCalc;
