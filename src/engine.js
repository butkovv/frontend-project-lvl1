import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const roundsCount = 3;

const launchGame = (description, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < roundsCount; i += 1) {
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
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
