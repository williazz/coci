const BST = require('../index.js');
const _ = require('underscore');

describe('BST', () => {
	describe('constructor', () => {
		it('should construct blank nodes', (done) => {
			const buildBlank = () => new BST();
			expect(buildBlank).not.toThrowError(/^BST.*/);
			done();
		});

		it('should have the default options', (done) => {
			const one = new BST();
			const { duplicates, measure } = one.options;
			expect(duplicates).toBeFalse();
			expect(measure.toString()).toEqual(((val) => val).toString());
			done();
		});

		it('should recognize new options', (done) => {
			const yesDups = new BST(undefined, { duplicates: true });
			const { duplicates, measure } = yesDups.options;
			expect(duplicates).toBeTrue();
			expect(measure.toString()).toEqual(((val) => val).toString());
			done();
		});

		it('should measure non-numerical vals without error', (done) => {
			const buildDog = () => new BST('dog', { measure: (str) => str.length });
			expect(buildDog).not.toThrowError(/^BST.*/);
			done();
		});
	});

	const blank = new BST();

	describe('getDirection', () => {
		const { getDirection } = blank;
		it('should recognize to go right', (done) => {
			expect(getDirection(10, 5)).toEqual('right');
			done();
		});

		it('should recognize to go left', (done) => {
			expect(getDirection(10, 20)).toEqual('left');
			done();
		});

		it('should recognize duplicates', (done) => {
			expect(getDirection(10, 10)).toBeUndefined();
			done();
		});

		it('should do the same for strings', (done) => {
			const blankStr = new BST(undefined, { measure: (str) => str.length });
			const { getDirection } = blankStr;
			expect(getDirection('asdf', 'd')).toEqual('right');
			expect(getDirection('daf', '236475ue')).toEqual('left');
			expect(getDirection('asdf', 'asdf')).toBeUndefined();
			done();
		});
	});

	describe('isEmpty', () => {
		it('should recognize empty', (done) => {
			expect(blank.isEmpty()).toBeTrue();
			done();
		});

		it('should regard children as non-empty', (done) => {
			const one = new BST();
			one.left = new BST();
			expect(one.isEmpty()).toBeFalse();
			done();
		});

		it('should regard any defined value as non-empty', (done) => {
			const nulll = new BST(null);
			expect(nulll.isEmpty()).toBeFalse();
			const dog = new BST('dog');
			expect(dog.isEmpty()).toBeFalse();
			const one = new BST(1);
			expect(one.isEmpty()).toBeFalse();
			done();
		});
	});

	describe('checkIntegrity', () => {
		it('should accept an empty BST', (done) => {
			expect(blank.checkIntegrity).not.toThrowError(Error, /^BST.*/);
			done();
		});

		it('should throw error on an invalid BST', (done) => {
			const five = new BST(5);
			five.left = new BST(10);
			five.right = new BST(15);
			expect(five.checkIntegrity).toThrowError(Error, /^BST.*/);
			done();
		});

		it('should throw error on an undefined internal node', (done) => {
			const blank = new BST();
			blank.right = new BST(1);
			expect(blank.checkIntegrity).toThrowError(Error);
			done();
		});
	});

	describe('contains', () => {
		const five = new BST(5);
		const ten = (five.right = new BST(10));
		ten.left = new BST(7);
		ten.right = new BST(15);
		const three = (five.left = new BST(3));
		three.left = new BST(0);
		three.right = new BST(4);

		it('should have valid test tree', (done) => {
			expect(five.checkIntegrity).not.toThrowError();
			done();
		});

		it('should have all true positives', (done) => {
			expect(five.contains(5)).toBeTrue();
			expect(five.contains(10)).toBeTrue();
			expect(five.contains(15)).toBeTrue();
			expect(five.contains(3)).toBeTrue();
			expect(five.contains(0)).toBeTrue();
			expect(five.contains(4)).toBeTrue();
			done();
		});

		it('should not have false positives', (done) => {
			expect(five.contains(-3)).toBeFalse();
			expect(five.contains(1)).toBeFalse();
			expect(five.contains(2)).toBeFalse();
			done();
		});
	});

	describe('add', () => {
		const bst = new BST();
		const nums = [0, -10, -15, -5, 10, 5, 15];
		it('should confirm adding new nums', (done) => {
			for (let i = 0; i < nums.length; i++) {
				expect(bst.add(nums[i])).toBeTrue();
			}
			done();
		});

		it('should contain all nums', (done) => {
			for (let i = 0; i < nums.length; i++) {
				expect(bst.contains(nums[i])).toBeTrue();
			}
			done();
		});
	});
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
