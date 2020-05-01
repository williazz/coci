const { urlifyBF, urlifyOpt } = require('./urlify.js');

describe('urlify', () => {
  it('returns the same as the brute force approach', (done) => {
    const input = 'asd f';
    expect(urlifyBF(input)).toEqual(urlifyOpt(input));
    done();
  });
});
