/*

    Stringbuilder
    split, search and replace, join
    
    I: string
    O: string with spaces replaced with %20
    C: Constance space, O(3n) => O(n)
    E: none


 */

const urlify = url => {
	url = url.split('');
	for (let i = 0; i < url.length; i++) {
		if (url[i] === ' ') url[i] = '%20';
	}
	url = url.join('');
	return url;
};

const urlifyCOCI = url => {
	let spaces = 0;
	for (let i = 0; i < url.length; i++) {
		if (url[i] === ' ') spaces++;
	}
	const trueLength = url.length + spaces * 2;
	let res = new Array(trueLength);
	let pointer = trueLength - 1;
	for (let i = url.length - 1; i >= 0; i--) {
		if (url[i] === ' ') {
			res[pointer] = '0';
			res[pointer - 1] = '2';
			res[pointer - 2] = '%';
			res -= 3;
		} else {
			res[pointer] = url[i];
			res--;
		}
	}
	return res.join('');
};

module.exports = { urlify, urlifyCOCI };