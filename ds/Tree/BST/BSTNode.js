const Queue = require('../../Queue');

/**
 * Creates a BST node
 * @class
 */
class BSTNode {
	constructor(val) {
		if (typeof val !== 'number')
			throw new Error('BSTNode must be called with a number');

		this.val = val;
		this.left = null;
		this.right = null;
	}

	/**
	 * Inserts a value into the BST node
	 * @param {*} val - The value to insert into the BST
	 */
	insert(val) {
		let cn = this;
		const getDir = () => (cn.val < val ? 'left' : 'right');
		let dir = getDir();
		while (cn[dir] instanceof BSTNode) {
			cn = cn[dir];
			dir = getDir();
		}
		cn[dir] = new BSTNode(val);
		return cn[dir];
	}

	/**
	 * Executes a query via breadth first search
	 * @param {*} query
	 */
	searchBreadthFirst(query) {
		const jobs = new Queue();
		jobs.enqueue(this);
		while (!jobs.isEmpty()) {
			const cn = jobs.dequeue();
			if (cn.left) jobs.enqueue(cn.left);
			if (cn.right) jobs.enqueue(cn.right);
			// stuff
		}
	}
	update(val) {}
	remove(val) {}
}

module.exports = BSTNode;
