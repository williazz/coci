const { addTwoNumbers, LinkedList } = require('./addTwoNumbers.js');

// describe('addTwoNumbers', () => {
// 	it('handles testcase [2,4,3] [5,6,4]', done => {
// 		const n1 = new LinkedList();
// 		const n2 = new LinkedList();
// 		[2, 4, 3].forEach(n => n1.append(n));
// 		[5, 6, 4].forEach(n => n2.append(n));
// 		const resLL = addTwoNumbers(n1, n2);
// 		const res = [];
// 		let p = resLL.head;
// 		while (p.next) {
// 			res.push(p.val);
// 			p = p.next;
// 			console.log(!!p.next);
// 		}
// 		expect(res.join('')).toBe('807');
// 		done();
// 	});
// });
