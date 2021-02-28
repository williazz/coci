const morris = { preOrder, inOrder, postOrder };

/**
 * @param {*} root
 * @param {*} visit
 */
function preOrder(root, visit) {
  // On every left endpoint, visit and node goes opposite direction
  while (root) {
    if (!root.left) {
      // Visit on left root endpoint. root goes right
      visit(root.val);
      root = root.right;
    } else {
      // pre goes right until endpoint
      let pre = root.left;
      while (pre.right && pre.right !== root) {
        pre = pre.right;
      }
      if (!pre.right) {
        // Visit on null pre endpoint. Mark visited. root goes left.
        visit(root.val);
        pre.right = root;
        root = root.left;
      } else {
        // Cleanup on visited pre endpoint. root goes right
        pre.right = null;
        root = root.right;
      }
    }
  }
}

/**
 * @param {*} root
 * @param {*} visit
 */
function inOrder(root, visit) {
  // On every left endpoint, visit and node goes opposite direction
  while (root) {
    if (!root.left) {
      // Visit on left root endpoint. root goes right
      visit(root.val);
      root = root.right;
    } else {
      // pre goes right until endpoint
      let pre = root.left;
      while (pre.right && pre.right !== root) {
        pre = pre.right;
      }
      if (!pre.right) {
        // Cleanup on visited pre endpoint. root goes right
        pre.right = null;
        root = root.right;
      } else {
        // Visit on null pre endpoint. Mark visited. root goes left.
        visit(root.val);
        pre.right = root;
        root = root.left;
      }
    }
  }
}

function postOrder(root, visit) {}

module.exports = morris;
