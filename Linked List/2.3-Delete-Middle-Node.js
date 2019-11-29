/**
  Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
  the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
  that node.
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
const first = new LinkedListNode("a");
const second = new LinkedListNode("b");
const thrid = new LinkedListNode("c");
const fourth = new LinkedListNode("d");
const fifth = new LinkedListNode("e");
const sixth = new LinkedListNode("f");

head.next = first;
first.next = second;
second.next = thrid;
thrid.next = fourth;
fourth.next = fifth;
fifth.next = sixth;

let p1 = head;
let p2 = head;
let prev;

function deleteMiddleNode(pointer1, pointer2, previous, head) {
  while (pointer1 !== null) {
    if (pointer2.next && pointer2.next.next) {
      pointer2 = pointer2.next.next;
    } else {
      previous.next = previous.next.next;
      break;
    }
    previous = pointer1;
    pointer1 = pointer1.next;
  }

  return head;
}

console.log(deleteMiddleNode(p1, p2, prev, head));
