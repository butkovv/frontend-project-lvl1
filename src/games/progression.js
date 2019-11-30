import { makeRandom } from '../index';
import {
  displayQuestion, checkAnswer, runGame,
} from '../brainlib';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const placeHolder = '..';

const gameRound = () => {
  let value = makeRandom();
  const increment = makeRandom();
  const missingPosition = makeRandom(progressionLength);
  let answer;
  let question = '';

  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === missingPosition) {
      question = `${question} ${placeHolder}`;
      answer = value;
    } else question = `${question} ${value}`;
    value += increment;
  }

  displayQuestion(question);

  if (checkAnswer(String(answer)) === true) gameRound();
};

const gameProgression = () => {
  runGame(description, gameRound);
};

export default gameProgression;
