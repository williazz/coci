/*
    in place swapping
    Time: O(nlogn)
    Space: O(logn)


    handle len < 2
    randomly pick partition
        swap partition with first element
    two pointers, i and j
    iterate thru rest
      val < arr[p] => increment j
      else swap with i and increment i
    swap i and 0
    return arr
*/

const quickSort = (arr = []) => {
  if (arr.length < 1) 
  (function sort(l, r) {
    if (r - l < 2) return;
    const p = Math.random()*(r - l) + l;
    [arr[l], arr[p]] = [arr[p], arr[l]];
    let i = l + 1;
    for (let j = l + 1; j < right + 1)


  })(0, arr.length);
};

const input = [];
for (let i = 10; 0 < i; i--) {
  input.push(i);
}
const output = quickSort(input);
console.log(output);
