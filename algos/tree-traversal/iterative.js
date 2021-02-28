const Queue = require('algorithms/data_structures/queue');

const iterativeDFS = {
  DFS: {
    preOrder,
    inOrder,
    postOrder,
  },
  BFS,
};

/**
 * O(logn) space using stack
 * @param {BSTNode} root
 * @param {Function} visit
 */
function preOrder(root, visit) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const cn = stack.pop();
    if (cn) {
      visit(cn);
      stack.push(cn.right);
      stack.push(cn.left);
    }
  }
}

/**
 * O(logn) space using stack
 * @param {BSTNode} root
 * @param {Function} visit
 */
function inOrder(root, visit) {
  const stack = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    visit(root);
    root = root.right;
  }
}

/**
 * O(logn) space using stack
 * @param {BSTNode} root
 * @param {Function} visit
 */
function postOrder(root, visit) {}

/**
 * O(logn) space using queue
 * @param {BSTNode} root
 * @param {Function} visit
 */
function BFS(root, visit) {
  const q = new Queue();
  if (root) q.push(root);
  while (!q.isEmpty()) {
    const node = q.pop();
    visit(node);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
}

module.exports = iterativeDFS;
