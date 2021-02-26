/** @class Creates a Binary Search Tree */
class BST {
  /**
   * @param {*} [val] - Sets the root value of this BST node
   * @param {Object} [options]
   * @param {Function} [options.measure=identity(val)] - Determines how to measure and therefore compare node values. Must return a number
   * @param {Boolean} [options.duplicates=false] - Determines whether or not duplicate values are allowed
   */
  constructor(val, options = {}) {
    const defaultOptions = {
      measure: (val) => val,
      duplicates: false,
    };
    this.options = Object.assign(defaultOptions, options);

    const measure = this.options.measure;
    if (val !== undefined && typeof measure(val) !== 'number')
      throw new Error(`
				BST value must be measurable (if defined)
					node=${val}
					measure=${measure(val)}
					typeof measure=${typeof measure(val)}`);

    this.val = val;
    this.left = null;
    this.right = null;
    this.checkIntegrity = this.checkIntegrity.bind(this);
    this.getDirection = this.getDirection.bind(this);
  }

  /**
   * Defines the binary search property. Determines where the next val should go by comparing to pre
   * @param {*} val
   * @param {*} node
   * @returns {String} left | right
   */
  getDirection(next, pre) {
    const { duplicates, measure } = this.options;
    next = measure(next);
    pre = measure(pre);
    if (!duplicates && next === pre) return;
    return next < pre ? 'left' : 'right';
  }

  /**
   * Invokes a visit callback on every node value in a pre-order depth-first traversal
   * @param {Function} visit
   */
  preOrderTraverse(visit = () => {}) {
    const traverse = (node) => {
      if (!node) return;
      visit(node);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this);
  }

  /**
   * Tests whether or not the BST is empty
   * @returns {Boolean}
   */
  isEmpty() {
    const { val, left, right } = this;
    return val === undefined && !left && !right;
  }

  /** Traverses the BST and throws error if binary search property is not satisfied */
  checkIntegrity() {
    if (this.isEmpty()) return;

    const { getDirection, options } = this;
    const { measure, duplicates } = options;
    this.preOrderTraverse((node) => {
      if (typeof measure(node.val) !== 'number')
        throw new Error(`
					BST node values must be measurable!
						node=${node.val}
						measure(val)=${measure(node.val)}`);

      // check left < parent
      if (node.left && getDirection(node.left.val, node.val) !== 'left') {
        throw new Error(
          `BST: left ${node.left.val} must be less than parent ${node.val}`
        );
      }

      // check parent < right
      if (node.right && getDirection(node.right.val, node.val) !== 'right')
        throw new Error(
          `BST: parent < right
						right=${node.right.val} must be ${duplicates ? '>=' : '>'} node
						node=${node.val}
						duplicates=${duplicates}`
        );
    });
  }

  /**
   *
   * @param {*} val
   * @returns {Boolean} - Confirms a successful add
   */
  add(val) {
    const { getDirection, options } = this;
    if (this.isEmpty()) {
      this.val = val;
      return true;
    }
    let node = this;
    let dir = getDirection(val, node);
    while (dir) {
      if (node[dir] instanceof BST) node = node[dir];
      else {
        node[dir] = new BST(val, options);
        return true;
      }
      dir = getDirection(val, node);
    }
    return false;
  }

  /**
   * Whether or not a BST contains the val
   * @param {*} val
   * @returns {Boolean}
   */
  contains(val) {
    const { getDirection } = this;
    let cn = this;
    while (cn) {
      if (cn.val === val) return true;
      const dir = getDirection(val, cn.val);
      cn = cn[dir];
    }
    return false;
  }

  getHeight() {
    let res = 0;
    const dfs = (node, depth = 0) => {
      if (node === null) {
        if (depth > res) res = depth;
        return;
      }
      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);
    };
    dfs(this);
    return res;
  }

  inOrderTraverse() {}
  postOrderTraverse() {}
}

module.exports = BST;
