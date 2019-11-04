const gameRound = () => {
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);
  let result;
  // Генерируем целое число в диапазоне [1; 3] для выбора одного из трех операторов
  const operator = Math.floor(Math.random() * 3) + 1;
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
  return result;
};

export default gameRound;
