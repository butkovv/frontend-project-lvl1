const gameRound = () => {
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);
  console.log(`Question: ${a} ${b}`);
  // Находим число, делящее a и b без остатка.
  // Перебираем значения от наименьшего из a и b до 1.
  let i = a > b ? b : a;
  while (a % i !== 0 || b % i !== 0) i -= 1;
  return i;
};
export default gameRound;
