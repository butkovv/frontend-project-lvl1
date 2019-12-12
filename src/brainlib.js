import { readlineSync, pairs } from './index';

const roundsCount = 3;

const launchGame = (description, game) => {
  let winsCount;
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (winsCount = 0; winsCount < roundsCount; winsCount += 1) {
    const gameInstance = game();
    const question = pairs.car(gameInstance);
    const correctAnswer = String(pairs.cdr(gameInstance));
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
  }

  if (winsCount === roundsCount) console.log(`Congratulations, ${userName}!`);
  else console.log(`Let's try again, ${userName}!`);
  return 0;
};

export default launchGame;
