import readlineSync from '../../index';

const gameRound = () => {
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);
  const operator = Math.floor(Math.random() * 3) + 1;
  let result;
  switch (operator) {
    case 1:
      result = a + b;
      console.log(`Question: ${a} + ${b}`);
      break;
    case 2:
      result = a - b;
      console.log(`Question: ${a} - ${b}`);
      break;
    case 3:
      result = a * b;
      console.log(`Question: ${a} * ${b}`);
      break;
    default:
      break;
  }
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === result) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
  return false;
};

export default gameRound;
