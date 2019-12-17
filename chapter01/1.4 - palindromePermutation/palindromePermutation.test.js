const palindromePermutation = require('./palindromePermutation.js');

describe('palindromePermutation', () => {
	it('returns a boolean', done => {
		expect(typeof palindromePermutation('')).toBe('boolean');
		expect(typeof palindromePermutation('asdf')).toBe('boolean');
		expect(typeof palindromePermutation('as')).toBe('boolean');
		done();
	});

	it('returns true for length zero and 1', done => {
		expect(palindromePermutation('')).toBe(true);
		expect(palindromePermutation('z')).toBe(true);
		done();
	});

	it('correctly identifies even length palindrome permutation', done => {
		expect(palindromePermutation('aassdd')).toBe(true);
		expect(palindromePermutation('hhhhsswwww11')).toBe(true);
		done();
	});

	it('correctly identifies even length non-pal permutation', done => {
		expect(palindromePermutation('aassdd123456')).toBe(false);
		expect(palindromePermutation('hhhpoiuytsdhsswwww11')).toBe(false);
		done();
	});

	it('correctly identifies odd length palindrome permutation', done => {
		expect(palindromePermutation('aasdd')).toBe(true);
		expect(palindromePermutation('hhhhsswww11')).toBe(true);
		done();
	});

	it('correctly identifies odd length non-pal permutation', done => {
		expect(palindromePermutation('aasddxq')).toBe(false);
		expect(palindromePermutation('hh16hhsswww11')).toBe(false);
		done();
	});
});
