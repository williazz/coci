const findMedianSortedArrays = require('./findMedianSortedArrays');
const _ = require('underscore');

const bruteForce = (nums1, nums2) => {
  const res = [...nums1, ...nums2].sort((a, b) => a - b);
  let mid = res.length >> 1;
  if (mid * 2 !== res.length) return (res[mid] + res[mid + 1]) / 2;
  else return res[mid];
};

/*



*/

describe('findMedianSortedArrays', () => {
  describe('bruteForce', () => {
    it('finds median even', (done) => {
      const nums1 = _.range(10);
      const nums2 = [10];
      expect(bruteForce(nums1, nums2)).toEqual(5.5);
      done();
    });

    it('finds odd median', (done) => {
      const nums1 = _.range(10);
      const nums2 = [];
      expect(bruteForce(nums1, nums2)).toEqual(5);
      done();
    });
  });

  it('', () => {});
});
