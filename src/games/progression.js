import { makeRandom, cons } from '../index';
import runGame from '../brainlib';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const placeHolder = '..';

const generateGameData = () => {
  let value = makeRandom();
  const increment = makeRandom();
  const missingPosition = makeRandom(1, progressionLength);
  let answer;
  let question = '';

  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === missingPosition) {
      question = `${question} ${placeHolder}`;
      answer = value;
    } else question = `${question} ${value}`;
    value += increment;
  }
  const gameData = cons(question, answer);
  return gameData;
};

const gameProgression = () => {
  runGame(description, generateGameData);
};

export default gameProgression;
