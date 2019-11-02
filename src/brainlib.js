import readlineSync from './index';
import brainEven from './bin/games/evenlib';
import brainCalc from './bin/games/calclib';

const brainGame = () => {
  let game;
  let count = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Choose your game.');
  const gameID = readlineSync.question('Enter 1 to launch brain-even or 2 to launch brain-calc. Type 0 to quit. ');

  switch (gameID) {
    case '1':
      game = brainEven;
      console.log('Answer "yes" if the number is even, otherwise answer "no"');
      break;
    case '2':
      game = brainCalc;
      break;
    default:
      break;
  }
  while (count < 3) {
    if (game() === true) {
      console.log('Correct!');
      count += 1;
    } else return console.log(`Let's try again, ${userName}!`);
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainGame;
