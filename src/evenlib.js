import readlineSync from './index';

let userName;

const gameRound = () => {
  const number = Math.round(Math.random() * 100);
  const remainder = number % 2;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = remainder === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let count = 0; count < 3; count += 1) {
    if (!gameRound()) return console.log(`Let's try again, ${userName}!`);
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default game;
