/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
  pre order traversal
*/

const nums = [null, 2, 1, 3];

var isValidBST = function(tree, cb) {
  if (!tree.length) return true;
  const stack = [0, 1];
  const res = [];
  while (stack.length > 1) {
    const cur = stack.pop();
    const left = 2 * cur;
    const right = 2 * cur + 1;
    if (left < nums.length) stack.push(left);
    if (right < nums.length) stack.push(right);
  }
  return res.reverse();
};

console.log(isValidBST(nums));
