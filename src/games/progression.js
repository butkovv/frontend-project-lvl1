import { cons } from '@hexlet/pairs';
import makeRandom from '..';
import launchGame from '../engine';

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
  const answer = start + diff * missingElementPosition;
  return cons(question.trim(), String(answer));
};

export default () => launchGame(description, generateGameData);
