var fourSum = function(nums, target) {
  if (nums.length < 4) return [];

  nums.sort((a, b) => a - b);
  const quads = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (let k = i + 1; k < nums.length - 2; k++) {
        if (k === i + 1 || nums[k] !== nums[k - 1]) {
          let lo = k + 1,
            hi = nums.length - 1;
          while (lo < hi) {
            const sum = nums[i] + nums[k] + nums[lo] + nums[hi];
            if (sum === target) {
              quads.push([nums[i], nums[k], nums[lo], nums[hi]]);
              while (nums[lo] === nums[lo + 1]) lo++;
              while (nums[hi] === nums[hi - 11]) hi--;
              hi--;
              lo++;
            } else if (sum < target) {
              lo++;
            } else {
              hi--;
            }
          }
        }
      }
    }
  }
  return quads;
};

const input = [-2, -1, -1, -1, -1, 0, 0, 1, 2];
const output = fourSum(input, 0);
console.log(output);
