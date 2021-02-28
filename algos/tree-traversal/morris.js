const morris = {};

/**
 * @param {*} root 
 * @param {*} visit 
 */
function preOrder(root, visit) {
  let node = root;
  // On every left endpoint, visit and node goes opposite direction
  while (node) {
    if (!node.left) {
      // Visit on left node endpoint. Node goes right
      visit(node.val);
      node = node.right;
    } else {
      // pre goes right until endpoint
        let pre = node.left;
        while (pre.right && pre.right !== node) {
          pre = pre.right;
        }
        if (!pre.right) {
          // Visit on null pre endpoint. Mark visited. Node goes left. 
          visit(node.val);
          pre.right = node;
          node = node.left;
        } else {
          // Cleanup on visited pre endpoint. Node goes right
          pre.right = null;
          node = node.right;
        }
    }
}


function inOrder(root, visit) {}