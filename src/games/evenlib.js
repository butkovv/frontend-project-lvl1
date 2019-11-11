import { makeRandom } from '../index';

const gameRound = () => {
  const number = makeRandom();
  const remainder = number % 2;
  console.log(`Question: ${number}`);
  const result = remainder === 0 ? 'yes' : 'no';
  return result;
};
export default gameRound;
