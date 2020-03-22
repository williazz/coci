const tripleStep = n => {
  const matr = new Array(n + 1).fill().map(x => []);
  for (let i = 0; i <= n; i++) {
    // i => nth step
    for (let k = 0; k <= 3; k++) {
      // k => step size
      if (k === 0 || i === 0) matr[i][k] = 0;
      else if (k === 1 || i === 1) matr[i][k] = 1;
      //skip step if step is too large
      else if (k > i) matr[i][k] = matr[i][k - 1];
      //step and lookup prev step
      else if (k <= i)
        matr[i][k] = Math.max(matr[i][k - 1], matr[i - 1][k]) + 1;
    }
  }
  return matr[n][3];
};

// O(ns) => O(n) time
// O(n) space

const tripleStepNSpace = n => {
  const matr = new Array(2).fill().map(x => []);
  for (let i = 0; i <= n; i++) {
    for (let k = 0; k <= 3; k++) {
      if (k === 0 || i === 0) matr[1][k] = 0;
      else if (k === 1 || i === 1) matr[1][k] = 1;
      else if (k > i) matr[1][k] = matr[1][k - 1];
      else if (k <= i) matr[1][k] = Math.max(matr[1][k - 1], matr[0][k]) + 1;
    }
    matr[0] = matr[1];
    matr[1] = [];
  }
  return matr[0][3];
};

// O(3^n) time

const tripleStepRec = (n, s = 3) => {
  if (s == 0 || n === 0) return 0;
  else if (n === 1 || s === 1) return 1;
  else if (s > n) return tripleStepRec(n, s - 1);
  else if (s <= n)
    return 1 + Math.max(tripleStepRec(n, s - 1), tripleStepRec(n - 1, s));
};

let passes = true;
for (let i = 0; i < 500; i++) {
  let isEqual =
    tripleStepNSpace(i) === tripleStep(i) &&
    tripleStepNSpace(i) === tripleStepRec(i);

  if (!isEqual) {
    passes = false;
    break;
  }
}
console.log(passes);

// const output = tripleStepNSpace(50) === tripleStep(50);
// console.log(output);
