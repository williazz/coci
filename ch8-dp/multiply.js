// O(m) time
// O(c) space

const multiply = (m, n) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1) return n;
  if (n === 1) return m;
  const isNegative = (m > 0 && n < 0) || (m < 0 && n > 0);
  let p = 0;
  const h = Math.abs(m),
    k = Math.abs(n);
  for (let i = 0; i < h; i++) p += k;
  return isNegative ? 0 - p : p;
};

const multiplyRec = (m, n) => {
  if (m === 0 || n === 0) return 0;
  if (n === 1) return m;
  if (m === 1) return n;
  if (n === -1) return -m;
  if (m === -1) return -n;
  if (n > 0) return m + multiplyRec(m, n - 1);
  else return 0 - m + multiplyRec(m, n + 1);
};

// O(mn) time
// O(mn) space

const multiplyDP = (m, n) => {
  const isNegative = m < 0 || n < 0;
  const am = Math.abs(m),
    an = Math.abs(n);
  const matr = new Array(am + 1).fill().map(x => []);
  for (let i = 0; i <= am; i++) {
    for (let k = 0; k <= an; k++) {
      // handle zero
      if (i === 0 || k === 0) matr[i][k] = 0;
      // handle ones
      else if (i === 1) matr[i][k] = k;
      else if (k === 1) matr[i][k] = i;
      // handle odd k's
      else if (k % 2) matr[i][k] = matr[i][k >> 1] + matr[i][(k >> 1) + 1];
      // handle even k's
      else matr[i][k] = matr[i][k] = matr[i][k >> 1] + matr[i][k >> 1];
    }
  }
  return isNegative ? 0 - matr[am][an] : matr[am][an];
};

// O(n) time
// O (n) space

const multiplyDPopt = (m, n) => {
  const isNegative = (m < 0 && n > 0) || (n < 0 && m > 0);
  const am = Math.abs(m),
    an = Math.abs(n);
  const arr = [0, am];
  for (let k = 2; k <= an; k++) {
    if (k % 2) arr[k] = arr[k >> 1] + arr[(k >> 1) + 1];
    else arr[k] = arr[k] = arr[k >> 1] + arr[k >> 1];
  }
  return isNegative ? 0 - arr[an] : arr[an];
};

const tests = [];

for (let i = 0; i < 500; i++) {
  const randInt = (floor, ceil) =>
    Math.floor(Math.random() * (ceil - floor) - floor);
  tests.push([randInt(-1000, 1000), randInt(-1000, 1000)]);
}

let allPass = true;

tests.forEach(args => {
  const ans = args[0] * args[1];
  const att = multiplyDPopt(...args);
  const pass = ans === att;
  if (!pass) allPass = false;
});

console.log(allPass);
