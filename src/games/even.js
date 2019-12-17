import { makeRandom, pairs } from '../index';
import launchGame from '../brainlib';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  const remainder = num % 2;
  return remainder === 0;
};

const generateGameData = () => {
  const question = makeRandom();
  const answer = isEven(question) ? 'yes' : 'no';
  return pairs.cons(question, answer);
};

const gameEven = () => {
  launchGame(description, generateGameData);
};

export default gameEven;
