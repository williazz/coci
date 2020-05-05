const deepEqual = require('../deepEqual.js');

describe('deepEqual', () => {
  it('should accept identical objects', (done) => {
    const one = { a: 'dog', b: 'cat', 3: 'number' };
    const two = { a: 'dog', b: 'cat', 3: 'number' };
    expect(deepEqual(one, two)).toBeTrue();
    done();
  });

  it('should reject different objects', (done) => {
    const one = { a: 'dog', c: 'cat', 3: 'number' };
    const two = { a: 'dog', b: 'cat', 3: 'number' };
    expect(deepEqual(one, two)).toBeFalse();
    done();
  });

  it('should accept identical objects with differently ordered keys value pairs', (done) => {
    const one = { a: 'dog', b: 'cat', 3: 'number' };
    const two = { 3: 'number', a: 'dog', b: 'cat' };
    expect(deepEqual(one, two)).toBeTrue();
    done();
  });

  it('should accept identical nested objects', (done) => {
    const one = {
      a: 'dog',
      wouldIBuyACat: { ever: 'never', everEver: { never: true } },
      3: 'number',
    };
    const two = {
      3: 'number',
      a: 'dog',
      wouldIBuyACat: { ever: 'never', everEver: { never: true } },
    };
    expect(deepEqual(one, two)).toBeTrue();
    done();
  });

  it('should reject different nested objects', (done) => {
    const one = {
      a: 'dog',
      wouldIBuyACat: { ever: 'never', everEver: { never: true } },
      3: 'number',
    };
    const two = {
      3: 'number',
      a: 'dog',
      wouldIBuyACat: { ever: 'never', everEver: { ever: true } },
    };
    expect(deepEqual(one, two)).toBeFalse();
    done();
  });

  it('should handle arrays', (done) => {
    const one = [1, 2, 3];
    const two = [1, 2, 3];
    expect(deepEqual(one, two)).toBeTrue();
    done();
  });

  it('should handle functions', (done) => {
    const one = () => 'shibas are great';
    const two = () => 'shibas are great';
    expect(deepEqual(one, two)).toBeTrue();
    done();
  });
});
