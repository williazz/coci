/*
    m: 6,6,15
    n: 1,5,9,11,13
    
    guess median

    guess = (m.length + n.length) >> 1
    
    
    split remaining numbers into two sets: left and right
        identify lengths of left and right
        identify max left and min right
        change guess

    
    ensure smaller is first
    define half

    define low = 0 and high = n

    while (low < high) {

    }
    

 */

const findMedianSortedArrays = function findMedianSortedArrays(nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;

  if (m < n) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const half = (m + n + 1) >> 1;

  let low = 0;
  let high = n;
  while (low <= high) {
    const i = (low + high) >> 1;
    const j = half - i;

    if (i < n && nums1[i] < nums2[j - 1]) {
      low = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      high = i - 1;
    } else {
      const l1 = i === 0 ? -Infinity : nums1[i - 1];
      const l2 = j === 0 ? -Infinity : nums2[j - 1];
      const maxLeft = Math.max(l1, l2);

      if ((m + n) % 2 === 1) {
        return maxLeft;
      }

      const r1 = i === n ? Infinity : nums1[i];
      const r2 = j === m ? Infinity : nums2[j];
      const minRight = Math.min(r1, r2);

      return (maxLeft + minRight) / 2;
    }
  }
};

const output = findMedianSortedArrays([2], [1, 3]);

console.log(output);

module.exports = findMedianSortedArrays;
