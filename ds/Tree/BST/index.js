/** @class Creates a Binary Search Tree */
class BST {
	/**
	 * @param {*} val - Sets the root value of this BST node
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

		const measureVal = this.options.measure(val);
		if (typeof measureVal !== 'number')
			throw new Error(`
				BST val must be measurable!
					measure(val)=${measureVal}
					typeof=${typeof measureVal}
			`);

		this.val = val;
		this.left = null;
		this.right = null;

		this.getDirection = this.getDirection.bind(this);
	}

	/**
	 * Defines the binary search property. Compares a new value to node value and defines the direction of the new value
	 * @param {*} val
	 * @param {*} node
	 * @returns {String} left | right
	 */
	getDirection(next, cur) {
		const { duplicates, measure } = this.options;
		next = measure(next);
		cur = measure(cur);
		if (!duplicates && next === cur) return;
		return next < cur ? 'left' : 'right';
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

	/** Traverses the BST and throws error if binary search property is not satisfied */
	checkIntegrity() {
		const { getDirection } = this;
		const { measure } = this.options;
		this.preOrderTraverse((node) => {
			// check left < parent
			if (typeof measure(node.val) !== 'number')
				throw new Error(`
					BST node values must be measurable!
						node.val=${node.val}
						measure(val)=${measure(node.val)}
				`);
			if (node.left && getDirection(node.val, node.left.val) !== 'left') {
				throw new Error(
					`BST: left ${node.left.val} must be less than parent ${node.val}`,
				);
			}
			// check parent < right
			if (node.right && getDirection(node.val, node.right.val) !== 'right')
				throw new Error(
					`BST: right ${node.right.val} must be >= parent ${node.val}; duplicates=${options.duplicates}`,
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

	contains(val) {
		const measure = this.options.measure;
		const getDirection = this.getDirection;
		let cn = this;
		let dir = getDirection(val, cn.val);
		while (dir) {
			cn = cn[dir];
			dir = getDirection(val, cn.val);
		}
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
