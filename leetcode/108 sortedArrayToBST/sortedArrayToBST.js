/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.add = this.add.bind(this);
  }

  add(val) {
    const node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
      return;
    }

    let cn = this.root;
    while (true) {
      if (val < cn.val) {
        if (!cn.left) {
          cn.left = node;
          break;
        }
        cn = cn.left;
      } else {
        if (!cn.right) {
          cn.right = node;
          break;
        }
        cn = cn.right;
      }
    }
  }
}

function addNode(nums, lo, hi, addToTree) {
  if (lo > hi) return;
  const mid = Math.floor((hi + lo) / 2);
  addToTree(nums[mid]);
  addNode(nums, lo, mid - 1, addToTree);
  addNode(nums, mid + 1, hi, addToTree);
}

function sortedArrayToBST(nums) {
  const tree = new Tree();
  addNode(nums, 0, nums.length - 1, tree.add);
  return tree.root;
}

module.exports = sortedArrayToBST;
