const gameRound = () => {
  let value = Math.round(Math.random() * 100);
  const increment = Math.round(Math.random() * 100);
  const progressionLength = 10;
  const missingPosition = Math.floor(Math.random() * progressionLength) + 1;
  let result;
  let output = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === missingPosition) {
      output += ' ..';
      result = value;
    } else output += ` ${value}`;
    value += increment;
  }
  console.log(`Question:${output}`);
  return result;
};

export default gameRound;
