const { quickSort, checkPermuteCount, checkPermuteSort } = require('./checkPermute.js');

describe('quicksort', () => {
	it('returns an array', done => {
		const arr = [5,2,3,1,4];
		const res = quickSort(arr);
		expect(res instanceof Array).toBe(true);
		done();
	});

	it('sorts 12345 correctly', done => {
		const arr = [5,2,3,1,4];
		const res = quickSort(arr).join('');
		expect(res).toBe('12345');
		done();
	});
});

describe('checkPermute quickSort', () => {
	it('returns true for asdf fdsa', done => {
		expect(checkPermuteSort('asdf', 'fdsa')).toBe(true);
		done();
	});
    
	it('returns false for different lengths', done => {
		expect(checkPermuteSort('asdf', 'asdfg')).toBe(false);
		done();
	});
    
	it('returns false for same length non-permutations', done => {
		expect(checkPermuteSort('asdf', 'asgf')).toBe(false);
		done();
	});
});

describe('checkPermute count', () => {
	it('returns true for asdf fdsa', done => {
		expect(checkPermuteCount('asdf', 'fdsa')).toBe(true);
		done();
	});
    
	it('returns false for different lengths', done => {
		expect(checkPermuteCount('asdf', 'asdfg')).toBe(false);
		done();
	});
    
	it('returns false for same length non-permutations', done => {
		expect(checkPermuteCount('asdf', 'asgf')).toBe(false);
		done();
	});
});