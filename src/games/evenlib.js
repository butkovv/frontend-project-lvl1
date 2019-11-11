const gameRound = () => {
  const number = Math.round(Math.random() * 100);
  const remainder = number % 2;
  console.log(`Question: ${number}`);
  const result = remainder === 0 ? 'yes' : 'no';
  return result;
};
export default gameRound;
