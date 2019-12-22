import readlineSync from 'readline-sync';

const makeRandom = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  readlineSync, makeRandom,
};
