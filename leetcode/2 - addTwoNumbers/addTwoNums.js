/**
 
  You are given two non-empty linked lists representing two non-negative integers. 
  The digits are stored in reverse order and each of their nodes contain a single digit. 
  Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example:

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*

 c: 
  - O(n) time
  - O(n) space
  - where n = number of digits

 e: 
  - carryover
  - different lengths



 l1:   
 l2:   
 dig   
 car   



 define 
  car = 0, 
  res = {next: null},
  tail = res,
  c1 = l1
  c2 = l2

while c1 | c2 | car
  define dig = 0
  add vals and car to dig
  write dig to res
  update car
  handle dig > 9

return res

*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
 l1:   
 l2:   
 dig   
 car   
*/

const addTwoNums = function(l1, l2) {
  let car = 0;
  const res = { next: null };
  let tail = res;
  let c1 = l1;
  let c2 = l2;
  while (c1 || c2 || car) {
    let dig = 0;
    if (c1) {
      dig += c1.val;
      c1 = c1.next;
    }
    if (c2) {
      dig += c2.val;
      c2 = c2.next;
    }
    if (car) dig++;

    car = dig > 9;
    if (car) dig -= 10;

    tail.next = new ListNode(dig);
    tail = tail.next;
  }
  return res.next;
};

module.exports = addTwoNums;
