/*

  There are two sorted arrays nums1 and nums2 of size m and n respectively.

  Find the median of the two sorted arrays. 
  The overall run time complexity should be O(log (m+n)).

  You may assume nums1 and nums2 cannot be both empty.

  
  3
  k

  1 2
  h

  avg = 2
 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/*
 

 A: 0 1 3
      a

 B: 2 4
    b

  A
  [0, ...i, ...m-1]

  leftA = [0, ...i-1]
  rightA = [i, ...m-1]

  B
  [0, ...j, ...n-1]

  leftB = [0, ...j-1]
  rightB = [j, ...n-1]

  median exists when
    for m = avg(i, j)
      where Max[leftA & leftB] < Min[rightA & rightB]
      and len[left] === len[right]


  while ?
    
    
    compare leftLen rightLen

*/

const findMedianSortedArrays = function(numsA, numsB) {
  const m = numsA.length,
    n = numbsB.length;
  let i = 0,
    j = (m + n + 1) / 2 - i;
};

module.exports = findMedianSortedArrays;
