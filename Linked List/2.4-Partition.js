/**
 * Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.
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
