import { readlineSync } from './index';

let userName = '';
let count = 0;
const rounds = 3;

export const displayQuestion = (question) => console.log(`Question: ${question}`);

export const checkAnswer = (correctAnswer) => {
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    console.log('Correct!');
    count += 1;
    return !(count === rounds);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

export const runGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  game();

  if (count === rounds) console.log(`Congratulations, ${userName}!`);
  else console.log(`Let's try again, ${userName}!`);
  return 0;
};
