/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 
 define res LL
        carryover num
        digit num,s
        two pointer
 
 
 
 */

const ListNode = val => ({ val, next: null });

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(val) {
		if (this.head === null) {
			this.head = ListNode(val);
			this.tail = this.head;
		} else if (this.tail === null) {
			this.head.next = ListNode(val);
			this.tail = this.head.next;
		} else {
			this.tail.next = ListNode(val);
			this.tail = this.tail.next;
		}
	}
}

const addTwoNumbers = (l1, l2) => {
	let p1 = l1,
		p2 = l2;
	let sum = 0;
	const res = new LinkedList();
	while (p1 !== null || p2 !== null || sum) {
		sum /= 10;
		if (p1) {
			sum += p1.val;
			p1 = p1.next;
		}
		if (p2) {
			sum += p2.val;
			p2 = p2.next;
		}
		const digit = sum % 10;
		res.append(digit);
		sum -= digit;
	}
	return res.head;
};

module.exports = { addTwoNumbers, LinkedList };
