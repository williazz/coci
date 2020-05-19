const BST = require('../index.js');
const _ = require('underscore');

describe('BST', () => {
	describe('checkIntegrity', () => {});
	describe('isEmpty', () => {
		const test = new BST();
		it('should be empty at first', (done) => {
			expect(test.isEmpty()).toBeTrue();
			done();
		});
	});
	describe('add', () => {});
	describe('getHeight', () => {});
	describe('getNumberOfNodes', () => {});
	describe('remove', () => {});
	describe('clear', () => {});
	describe('getEntry', () => {});
	describe('contains', () => {});
	describe('preOrderTraverse', () => {});
	describe('inOrderTraverse', () => {});
	describe('postOrderTraverse', () => {});
});
