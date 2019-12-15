const { isUniqueASCII, isUnique } = require('./isUnique');

describe('isUniqueASCII', () => {
    test('it returns true for empty string', done => {
        expect(isUniqueASCII('')).toBe(true);
        done();
    });

    test('it returns false for string with duplicate chars', done => {
        expect(isUniqueASCII('asdfweds')).toBe(false);
        done();
    });

    test('it returns true for str with all unique chars', done => {
        expect(isUniqueASCII('asdfghjk')).toBe(true);
        done();
    });
});

describe('isUnique', () => {
    test('it returns true for empty string', done => {
        expect(isUnique('')).toBe(true);
        done();
    });

    test('it returns false for string with duplicate chars', done => {
        expect(isUnique('asdfweds')).toBe(false);
        done();
    });

    test('it returns true for str with all unique chars', done => {
        expect(isUnique('asdfghjk')).toBe(true);
        done();
    });
});