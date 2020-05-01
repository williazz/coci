/*
Prompt: Given two strings, write a method to decide if one is a permutation of the other.

I:
 - two strings
O:
 - Boolean
C:
    Sort
     - O(N log N) time
     - no space
     Compare lengths
     Sort each str via quicksort and compare
    
    Count chars
     - O(n) time
     - O(n) space
    Compare lengths
    define arr of 128


E: none
*/

// compare lengths
// sort both via quicksort and compare

const quickSort = arr => {
	if (arr.length <= 1) return arr;
	const pivot = arr[0];
	const left = [], right = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] >= pivot) right.push(arr[i]);
		else left.push(arr[i]);
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
};

const checkPermuteSort = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	return quickSort(str1.split('')).join('') === quickSort(str2.split('')).join('');
};

const checkPermuteCount = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	const chars = new Array(128);
	for (let i = 0; i < str1.length; i++) {
		let val = str1.charCodeAt(i);
		chars[val] ? chars[val]++ : chars[val] = 1;
	}
	for (let i = 0; i < str2.length; i++) {
		let val = chars[str2.charCodeAt(i)];
		if (!val || val < 1) return false;
		chars[str2.charCodeAt(i)]--;
	}
	return true;
};

module.exports = {checkPermuteSort, checkPermuteCount, quickSort};