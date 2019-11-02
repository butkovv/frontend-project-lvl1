import readlineSync from '../../index';

const gameRound = () => {
  const number = Math.round(Math.random() * 100);
  const remainder = number % 2;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = remainder === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

export default gameRound;
