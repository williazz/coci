/**
 * Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.
 * @param {int[][]} matr
 */

/* 
  Strategy: 
   - Two passes
     - 1: 
       - use first col & row to remember which cols and rows to zero
       - use two vars to remember if first col & row should be zeroed
     - 2:
       - write to all cells matr[1+][1+]
       - conditionally write to first col and row
*/

function setZeroes(matr) {
  let firstRowToZero = false;
  let firstColToZero = false;
  for (let r = 0; r < matr.length; r++) {
    for (let c = 0; c < matr[0].length; c++) {
      if (matr[r][c] === 0) {
        if (r === 0) firstRowToZero = true;
        if (c === 0) firstColToZero = true;
        matr[0][c] = 0;
        matr[r][0] = 0;
      }
    }
  }

  for (let r = 1; r < matr.length; r++) {
    for (let c = 1; c < matr[0].length; c++) {
      if (matr[0][c] === 0 || matr[r][0] === 0) {
        matr[r][c] = 0;
      }
    }
  }

  if (firstRowToZero) {
    for (let c = 0; c < matr[0].length; c++) {
      matr[0][c] = 0;
    }
  }

  if (firstColToZero) {
    for (let r = 0; r < matr.length; r++) {
      matr[r][0] = 0;
    }
  }
}
