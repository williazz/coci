/*

  res = 0;
  iterate thru,
    update res
    skip 
    add 
    

*/
// base case when n or w is 0
// skip last item if heavier than W
// include and exclude last item, return the greater of the two

const knapsack = (W, wt, val, n) => {
  if (W === 0 || n === 0) return 0;
  else if (wt[n - 1] > W) return knapsack(W, wt, val, n - 1);
  else {
    const include = val[n - 1] + knapsack(W - wt[n - 1], wt, val, n - 1);
    const exclude = knapsack(W, wt, val, n - 1);
    return Math.max(include, exclude);
  }
};

const knapsackDP = (W, wt, val, n) => {
  const matr = new Array(n + 1).fill().map(x => []);
  for (let i = 0; i <= n; i++) {
    // i => n iterator
    for (let k = 0; k <= W; k++) {
      // k => W iterator
      // base case when n or w is 0
      if (k === 0 || i === 0) matr[i][k] = 0;
      // skip last item if heavier than W
      else if (wt[i - 1] > k) matr[i][k] = matr[i - 1][k];
      // include and exclude last item, return the greater of the two
      else {
        const include = val[i - 1] + matr[i - 1][k - wt[i - 1]];
        const exclude = matr[i - 1][k];
        matr[i][k] = Math.max(include, exclude);
      }
    }
  }
  return matr[n][W];
};

let val = [3, 5, 6];
let wt = [1, 2, 3];
let W = 5;

const output = knapsackDP(W, wt, val, 3);
console.log(output);
