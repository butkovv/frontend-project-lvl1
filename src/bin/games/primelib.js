const gameRound = () => {
  let n = Math.round(Math.random() * 10000);
  const divisors = [];
  const uniqueDivisors = [];
  let f = 2;
  console.log(`Question:${n}`);
  while (n > 1) {
    if (n % f === 0) {
      divisors.push(f);
      n /= f;
    } else f += 1;
  }
  for (let i = 1; i < divisors.length; i += 1) {
    if (divisors[i] !== divisors[i - 1]) uniqueDivisors.push(divisors[i]);
  }
  return uniqueDivisors.length === 0 ? 'yes' : 'no';
};

export default gameRound;
