const BST = require('../index.js');
const _ = require('underscore');

describe('BST', () => {
	describe('constructor', () => {
		it('should require that val is measurable', (done) => {
			try {
				const blank = new BST();
				expect(true).toBeFalse();
			} catch (err) {
				expect(err).toBeInstanceOf(Error);
			}

			try {
				const one = new BST(1);
			} catch (err) {
				expect(err).toBeUndefined();
			}

			try {
				const word = new BST('please fail');
				expect(true).toBeFalse();
			} catch (err) {
				expect(err).toBeInstanceOf(Error);
			}
			done();
		});

		it('should have the default options', (done) => {
			const one = new BST(1);
			const { duplicates, measure } = one.options;
			expect(duplicates).toBeFalse();
			expect(measure.toString()).toEqual(((val) => val).toString());
			done();
		});

		it('should recognize new options', (done) => {
			const yesDups = new BST(1, { duplicates: true });
			const { duplicates, measure } = yesDups.options;
			expect(duplicates).toBeTrue();
			expect(measure.toString()).toEqual(((val) => val).toString());
			done();
		});

		it('should allow non-number vals to be measured', (done) => {
			try {
				const word = new BST('harry potter!', { measure: (str) => str.length });
			} catch (err) {
				expect(err).toBeUndefined();
			}
			done();
		});
	});

	describe('isEmpty', () => {
		it('should be empty at first', (done) => {
			expect(blank.isEmpty()).toBeTrue();
			done();
		});

		it('should not be empty with a root', (done) => {
			const root = new BST(10);
			expect(root.isEmpty()).toBeFalse();
			done();
		});
	});

	describe('getDirection', () => {
		it('should say to go right', (done) => {
			const getDirection = blank.getDirection;
			expect(getDirection(10, 5)).toEqual('right');
			done();
		});
	});

	// describe('checkIntegrity', () => {
	// 	it('should accept a blank bst', (done) => {
	// 		try {
	// 			blank.checkIntegrity();
	// 		} catch (err) {
	// 			expect(err).toBeUndefined();
	// 		}
	// 		done();
	// 	});

	// 	it('should recognize an incorrect bst', (done) => {
	// 		const five = new BST(5);
	// 		five.left = new BST(10);
	// 		five.right = new BST(15);

	// 		try {
	// 			five.checkIntegrity();
	// 			expect(true).toBeFalse();
	// 		} catch (err) {
	// 			expect(err).toBeInstanceOf(Object);
	// 		}
	// 		done();
	// 	});
	// });

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
