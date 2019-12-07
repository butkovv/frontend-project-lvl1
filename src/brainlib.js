import { readlineSync, car, cdr } from './index';

const roundsCount = 3;

const checkAnswer = (correctAnswer) => {
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const runRound = (game) => {
  const gameInstance = game();
  console.log(`Question: ${car(gameInstance)}`);
  return checkAnswer(String(cdr(gameInstance)));
};

const launchGame = (description, game) => {
  let winsCount = 0;
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  while (winsCount < roundsCount && runRound(game)) winsCount += 1;
  if (winsCount === roundsCount) console.log(`Congratulations, ${userName}!`);
  else console.log(`Let's try again, ${userName}!`);
  return 0;
};

export default launchGame;
