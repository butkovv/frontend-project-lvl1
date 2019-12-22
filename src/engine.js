import { car, cdr } from '@hexlet/pairs';
import { readlineSync } from './index';

const roundsCount = 3;

const launchGame = (description, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let winsCount = 0; winsCount < roundsCount; winsCount += 1) {
    const gameInstance = generateGameData();
    const question = car(gameInstance);
    const correctAnswer = cdr(gameInstance);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return null;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return null;
};

export default launchGame;
