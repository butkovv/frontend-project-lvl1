const gameRound = () => {
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);
  const getGCD = (x, y) => {
    let i = x > y ? y : x;
    while (x % i !== 0 || y % i !== 0) i -= 1;
    return i;
  };
  const result = getGCD(a, b);
  console.log(`Question: ${a} ${b}`);
  return result;
};
export default gameRound;
