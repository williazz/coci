/*

Problem: 
 - 1) Determine if a string consists of only unique charactes or not
 - 2) No data structs

I:
 - String
 - ASCII, option for extended
O: 
 - Boolean

C: 
  With data structs: 
   - O(n) time
   - O(c) space
  
  Without:
   - O(n^2) time
   - No space

E:
  '' => true
  type error (not string) => throw error
*/

const isUniqueASCII = (str, extended = false) => {
	try {
		if (typeof str !== 'string') {
			throw new TypeError('Argument str must be a string');
		} else {
			const length = extended ? 256 : 128;
			if (str.length > length) return false;
			const chars = Array(length);
			for (let i = 0; i < str.length; i++) {
				const charCode = str.charCodeAt(i);
				if (chars[charCode]) return false;
				else {
					chars[charCode] = true;
				}
			}
			return true;
		}
	} catch (err) {
		console.error(err);
		return err;
	}
};

const isUnique = str => {
	try {
		if (typeof str !== 'string') {
			throw new TypeError('Argument str must be a string');
		} else {
			const chars = new Set();
			for (let i = 0; i < str.length; i++) {
				if (chars.has(str[i])) return false;
				else chars.add(str[i]);
			}
			return true;
		}
	} catch (err) {
		console.error(err);
		return err;
	}
};

const isUniqueBitWise = str => str;


module.exports = { isUniqueASCII, isUnique ,isUniqueBitWise };
