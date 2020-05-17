const robotGrid = grid => {
  if (grid[0][0] === 'x') return false;
  const width = grid[0].length;
  const height = grid.length;
  const matr = new Array(height).fill().map(x => []);
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      if (h === 0 || w === 0) matr[h][w] = 0;
      else if (h === 1 && w === 1) matr[h][w] = [[[1]]];
      else if (grid[h][w] === 'x') matr[h][w] = 0;
      else if (matr[h - 1][w] === 1 || matr[h][w - 1] === 1) {
        const prevPaths = [];
        if (matr[h][w - 1]) prevPaths.push(...matr[h][w - 1]);
        if (matr[h - 1][w - 1]) prevPaths.push(...matr[h - 1][w - 1]);
        prevPaths.map(path => {
          path.push([]);
          path[h][w] = 1;
          return path;
        });
      } else matr[h][w] = 0;
    }
  }
  return matr;
};

const grid = [
  ['o', 'x', 'x', 'o'],
  ['o', 'o', 'o', 'o'],
  ['o', 'x', 'o', 'o'],
];

const output = robotGrid(grid);
console.log(output);
