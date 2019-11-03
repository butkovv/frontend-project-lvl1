import readlineSync from './index';
import brainEven from './bin/games/evenlib';
import brainCalc from './bin/games/calclib';
import brainGCD from './bin/games/gcdlib';
import brainProgression from './bin/games/progressionlib';
import brainPrime from './bin/games/primelib';

const brainGame = () => {
  let game;
  let count = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Choose your game.');
  const gameID = readlineSync.question('Enter 1 to launch brain-even, 2 to launch brain-calc, 3 to launch brain-gcd, 4 to launch brain-progression, 5 to launch brain-prime. Type 0 to quit. ');

  switch (gameID) {
    case '1':
      game = brainEven;
      console.log('Answer "yes" if the number is even, otherwise answer "no"');
      break;
    case '2':
      game = brainCalc;
      console.log('What is the result of the expression?');
      break;
    case '3':
      game = brainGCD;
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case '4':
      game = brainProgression;
      console.log('What number is missing in the progression?');
      break;
    case '5':
      game = brainPrime;
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      break;
  }
  while (count < 3) {
    const correctAnswer = String(game());
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainGame;
