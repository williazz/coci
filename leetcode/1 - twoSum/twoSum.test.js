const twoSum = require('./twoSum.js');
const { deepEqual } = require('../../util');

describe('twoSum', () => {
  it('should ignore arr with length < 2', (done) => {
    const res = twoSum([0], 0);
    expect(res).toBeUndefined;
    done();
  });

  it('should return undefined where no solution', (done) => {
    const res = twoSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 5);
    expect(res).toBeUndefined;
    done();
  });

  it('should return an array where pair exists', (done) => {
    const res = twoSum([0, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0], 5);
    expect(res).toBeInstanceOf(Array);
    done();
  });

  it('should find a pair where it exists', (done) => {
    const res = twoSum([0, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0], 5);
    expect(res.toString()).toEqual('4,7');
    done();
  });
});
