const Queue = require('../../Queue');

/** @class Creates a Binary Search Tree */
class BST {
	/**
	 * @param {*} val - Sets the root value of this BST node
	 * @param {Object} [options]
	 * @param {Function} [options.measure=identity(val)] - Determines how to measure and therefore compare node values
	 * @param {Boolean} [options.duplicates=false] - Determines whether or not duplicate values are allowed
	 */
	constructor(val, options = {}) {
		const defaultOptions = {
			measure: (val) => val,
			duplicates: false,
		};
		this.val = val;
		this.left = null;
		this.right = null;
		this.options = Object.assign(defaultOptions, options);

		this.binarySearchProperty = this.binarySearchProperty.bind(this);
	}

	/**
	 * Compares a new value to node value and defines the direction the new value should go
	 * @param {*} val
	 * @param {*} node
	 * @returns {String} left | right. If duplicates are not allowed, it can also return false.
	 */
	binarySearchProperty(val, nodeVal) {
		const { duplicates, measure } = this.options;
		const v = measure(val);
		const n = measure(nodeVal);
		if (!duplicates && v === n) return false;
		return v < n ? 'left' : 'right';
	}

	/**
	 * Invokes a visit callback on every node value in a pre-order depth-first traversal
	 * @callback visit - visit(node)
	 */
	preOrderTraverse(visit = () => {}) {
		visit(this.val);
		if (this.left) this.preOrderTraverse(this.left);
		if (this.right) this.preOrderTraverse(this.right);
	}

	/** Traverses the BST and throws error if binary search property is not satisfied */
	checkIntegrity() {
		const { binarySearchProperty } = this;
		this.preOrderTraverse((node) => {
			if (node === null) return;
			// check left < parent
			if (
				node.left &&
				binarySearchProperty(node.val, node.left.val) !== 'left'
			) {
				throw new Error(
					`BST: left ${node.left.val} must be less than parent ${node.val}`,
				);
			}

			// check parent <= right (depending on options.duplicates)
			if (
				node.right &&
				binarySearchProperty(node.val, node.right.val) !== 'right'
			)
				throw new Error(
					`BST: left ${node.left.val} must be less than parent ${node.val}`,
				);
		});
	}

	/**
	 * Tests whether or not the BST is empty
	 * @returns {Boolean}
	 */
	isEmpty() {
		const { val, left, right } = this;
		return val === undefined && !left && !right;
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
	}

	inOrderTraverse() {}
	postOrderTraverse() {}
}

module.exports = BST;
