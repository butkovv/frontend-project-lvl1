const gameRound = () => {
  let n = Math.round(Math.random() * 10000);
  const divisors = [];
  const uniqueDivisors = [];
  let f = 2;
  console.log(`Question:${n}`);
  // Реализуем алгоритм поиска делителей числа n с добавлением их в массив divisors
  while (n > 1) {
    if (n % f === 0) {
      divisors.push(f);
      n /= f;
    } else f += 1;
  }
  // Заполняем массив uniqueDivisors уникальными значениями из массива divisors
  for (let i = 0; i < divisors.length; i += 1) {
    if (divisors[i] !== divisors[i - 1]) uniqueDivisors.push(divisors[i]);
  }
  return uniqueDivisors.length === 1 ? 'yes' : 'no';
};

export default gameRound;
