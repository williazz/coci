/*
  I am kind of stuck on this problem
*/

const Towers = n => {
  const towers = new Array(3).fill(n).map(x => []);
  for (let i = 0; i < n; i++) towers[0][i] = n - i;
  return towers;
};

const towersHanoiRec = (towers, n) => {
  if (n === 0) return Towers(0);
  if (n === 1) return Towers(1);
};
