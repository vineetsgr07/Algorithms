/**
 * Loop Detection: Given a circular linked list, implement
 * an algorithm that returns the node at the beginning of the loop
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

const head = new LinkedListNode();
const first = new LinkedListNode(7);
const second = new LinkedListNode(1);
const thrid = new LinkedListNode(6);
const fourth = new LinkedListNode(5);
const fifth = new LinkedListNode(9);
const sixth = new LinkedListNode(2);

head.next = first;
first.next = second;
second.next = thrid;
thrid.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
sixth.next = first;

let curr = first;
let p1 = curr;
let p2 = curr.next.next;

let count = 0;

while (p1.data !== p2.data && count !== 20) {
  console.log(`${p1.data}: ${p2.data}`);
  count += 1;
  p1 = p1.next;
  p2 = p2.next.next;
}

console.log(`${count}th Node from`);
