const longestSubstr = require('./longestSubstr');

describe('longestSubstr', () => {
  it('should measure an entirely unique str', (done) => {
    const str = 'asdfqwer';
    expect(longestSubstr(str)).toEqual(str.length);
    done();
  });

  it('should handle different lengths', (done) => {
    const str = 'abcazxyb';
    expect(longestSubstr(str)).toEqual(6);
    done();
  });

  it('should handle homogenous str', (done) => {
    const str = '2222222222';
    expect(longestSubstr(str)).toEqual(1);
    done();
  });

  it('should handle empty str', (done) => {
    const str = '';
    expect(longestSubstr(str)).toEqual(0);
    done();
  });

  it('should handle abba', (done) => {
    const str = 'abba';
    expect(longestSubstr(str)).toEqual(2);
    done();
  });
});
