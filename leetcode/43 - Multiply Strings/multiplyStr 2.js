/* 

    https://leetcode.com/problems/multiply-strings/


 */

const multiply = (m, n) => {
	const res = new Array(m.length + n.length);
	for (let i = m.length - 1; i >= 0; i--) {
		for (let k = n.length - 1; k >= 0; k--) {
			const prod = m[i] * n[k];
			const p1 = i + k,
				p2 = i + k + 1;
			const sum = prod + res[p2];
			res[p2] = res[p2] ? res[p2] + (sum % 10) : sum % 10;
			res[p1] = res[p1] ? res[p1] + Math.floor(sum / 10) : Math.floor(sum / 10);
		}
	}
	return res.join('');
};

module.exports = multiply;
