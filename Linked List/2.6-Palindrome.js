/**
 * Palindrome: Implement a function to check if a linked list is
 * a palindrome.
 */

class LinkedListNode {
  constructor(data) {
    if (data === null) {
      this.next = null;
    } else {
      this.data = data;
      this.next = null;
    }
  }
}

const headP1 = new LinkedListNode();
const first = new LinkedListNode(1);
const second = new LinkedListNode(2);
const thrid = new LinkedListNode(3);
const fourth = new LinkedListNode(2);
const fifth = new LinkedListNode(1);

headP1.next = first;
first.next = second;
second.next = thrid;
thrid.next = fourth;
fourth.next = fifth;

let curr = first;
let p1 = curr;
let p2;
let stack = [];

while (p1) {
  stack.push(p1.data);
  if (p2 && p2.next === null) {
    break;
  } else {
    p1 = p1.next;
    if (p1.next !== null) p2 = p1.next.next;
  }
}

let isPalindrome = true;

while (p1) {
  let popElement = stack.pop();
  if (popElement === p1.data) {
    p1 = p1.next;
  } else {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("Sequence us Palindrome");
} else {
  console.log("Not Palindrome");
}
