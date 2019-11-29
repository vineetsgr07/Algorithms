/**
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the inter­
secting node. Note that the intersection is defined based on reference, not value. That is, if the kth
node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting
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
const first = new LinkedListNode(7);
const second = new LinkedListNode(1);
const thrid = new LinkedListNode(6);

const headP2 = new LinkedListNode();
const fourth = new LinkedListNode(5);
const fifth = new LinkedListNode(9);
const sixth = new LinkedListNode(2);

headP1.next = first;
first.next = second;
second.next = thrid;

headP2.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
