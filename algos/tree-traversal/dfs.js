/**
 * Enumerates the possible bfs orders
 * @enum {String}
 */
const orderEnum = {
	PRE: 'PRE',
	IN: 'IN',
	POST: 'POST',
};

/**
 * Recursively performs depth first search in any order
 * @param {BTNode} root - The root node of a binary tree
 * @param {visit} cb - A callback to execute with the visited values
 * @param {orderEnum} [order=IN] - Defines the order of the depth first search. Is one of the enumerated strings in orderEnum
 */

const dfs = (root, visit = () => {}, order = orderEnum.IN) => {
	const traverse = (node) => {
		if (node === null) return;
		if (order === 'PRE') visit(node.val);
		traverse(node.left);
		if (order === 'IN') visit(node.val);
		traverse(node.right);
		if (order === 'POST') visit(node.val);
	};
	traverse(root);
};

/**
 * @callback dfs~visit
 * @param {*} val - The value of the current node being visited by dfs
 */

module.exports = dfs;
