import { makeRandom } from '../index';
import {
  displayQuestion, checkAnswer, runGame,
} from '../brainlib';

const description = 'What number is missing in the progression?';

const gameRound = () => {
  let value = makeRandom();
  const increment = makeRandom();
  const progressionLength = 10;
  const missingPosition = makeRandom(progressionLength);
  let answer;
  let output = '';

  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === missingPosition) {
      output += ' ..';
      answer = value;
    } else output += ` ${value}`;
    value += increment;
  }

  displayQuestion(output);

  if (checkAnswer(String(answer)) === true) gameRound();
};

const gameProgression = () => {
  runGame(description, gameRound);
};

export default gameProgression;
