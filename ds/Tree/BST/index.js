/**
 * Creates a Binary Search Tree
 * @class
 */
class BinarySearchTree {
	constructor() {
		/**@property {Array} data - Where nodes are stored */
		this.data = [null];
	}

	get length() {
		return this.data.length;
	}

	insert(val) {
		const { data, length } = this;
		let i = 1;
		while (i < length) {
			const cv = data[i];
			if (cv === undefined) {
				data[i] = val;
				return val;
			} else if (cv < i) {
				i *= 2;
			} else {
				i = 2 * i + 1;
			}
		}
	}

	read() {}

	update() {}

	remove() {}
}

module.exports = BinarySearchTree;
