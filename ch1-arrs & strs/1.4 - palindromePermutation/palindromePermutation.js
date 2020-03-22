/*

    given a string, check if it is a permutation of a palindrome

    I: what chars? ASCII? 
    O: boolean
    C: 
    E: is length zero a palindrome? yes

    logic:
    - length zero or 1 => true 
    - odd length, every char even count except one
      even length, every char even count
        - define arr 128 for ASCII
        - traverse thru string and write to arr
        - count and return 
    O(n) space 
    O(n) time, (2 passes)
*/

const palindromePermutation = str => {
	if (str.length <= 1) return true;
	const chars = new Array(128);
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		if (chars[char]) chars[char]++;
		else chars[char] = 1;
	}
	if (str.length % 2) {
		let seenOdd = false;
		for (let i = 0; i < chars.length; i++) {
			if (chars[i] && chars[i] % 2) {
				if (seenOdd) return false;
				seenOdd = true;
			}
		}
	} else {
		for (let i = 0; i < chars.length; i++) {
			if (chars[i] && chars[i] % 2) return false;
		}
	}

	return true;
};

module.exports = palindromePermutation;
