const factorial = n => {
  if (n === 0) return 0;
  const isNeg = n < 0;
  let prod = 1;
  const an = Math.abs(n);
  for (let i = 2; i <= n; i++) prod *= i;
  return isNeg ? 0 - prod : prod;
};

console.log(factorial(5));
