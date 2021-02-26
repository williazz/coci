const { expectation } = require('sinon');
const checkPalindrome = require('./checkPalindrome');

/*

a
bb
bax
baax

*/

describe('checkPalindrome', () => {
  it('should get an odd len=1', () => {
    const input = 'a';
    expect(checkPalindrome(input, 0, 0)).toEqual([0, 0]);
  });

  it('should get an odd len=3', () => {
    const input = 'bad';
    expect(checkPalindrome(input, 1, 1)).toEqual([1, 1]);
  });

  it('should get an odd len=4', () => {
    const input = 'nnad';
    expect(checkPalindrome(input, 2, 2)).toEqual([2, 2]);
  });

  it('should get an odd len=4', () => {
    const input = 'nnxcacxd';
    expect(checkPalindrome(input, 4, 4)).toEqual([2, 6]);
  });

  it('should get an even len=2', () => {
    const input = 'aa';
    expect(checkPalindrome(input, 0, 1)).toEqual([0, 1]);
  });

  it('should get an even len=4', () => {
    const input = 'baax';
    expect(checkPalindrome(input, 1, 2)).toEqual([1, 2]);
  });

  it('should get an even len=10', () => {
    const input = 'bbawaeawxp';
    expect(checkPalindrome(input, 5, 5)).toEqual([3, 7]);
  });
});
