import { makeRandom, cons } from '../index';
import runGame from '../brainlib';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  const remainder = num % 2;
  return remainder === 0;
};

const generateGameData = () => {
  const question = makeRandom();
  const answer = isEven(question) ? 'yes' : 'no';
  const gameData = cons(question, answer);
  return gameData;
};

const gameEven = () => {
  runGame(description, generateGameData);
};

export default gameEven;
