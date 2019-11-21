const makeRandom = (max = 100, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

export default makeRandom;
