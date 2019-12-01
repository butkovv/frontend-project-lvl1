import { makeRandom, cons } from '../index';
import runGame from '../brainlib';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenCheck = (num) => {
  const remainder = num % 2;
  return remainder === 0;
};

const game = () => {
  const question = makeRandom();
  const answer = evenCheck(question) ? 'yes' : 'no';
  const gameData = cons(question, answer);
  return gameData;
};

const gameEven = () => {
  runGame(description, game);
};

export default gameEven;
