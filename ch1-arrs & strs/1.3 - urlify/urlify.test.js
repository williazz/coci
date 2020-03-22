const { urlify, urlifyCOCI } = require('./urlify.js');

describe('urlify', () => {
	it('it returns a string', done => {
		const res = urlify('asd f');
		expect(typeof res).toBe('string');
		done();
	});
});