import { makeRandom, pairs } from '../index';
import launchGame from '../brainlib';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const placeHolder = '..';

const generateGameData = () => {
  const start = makeRandom();
  const diff = makeRandom();
  const missingElementPosition = makeRandom(1, progressionLength - 1);
  let question = '';

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === missingElementPosition) question = `${question} ${placeHolder}`;
    else question = `${question} ${start + diff * i}`;
  }
  question = question.trim();
  const answer = start + diff * missingElementPosition;
  return pairs.cons(question, answer);
};

const gameProgression = () => {
  launchGame(description, generateGameData);
};

export default gameProgression;
