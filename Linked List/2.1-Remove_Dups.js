/**
Remove Dups! Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
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
  const first = new LinkedListNode(1);
  const second = new LinkedListNode(2);
  const thrid = new LinkedListNode(3);
  const fourth = new LinkedListNode(1);
  const fifth = new LinkedListNode(2);
  const sixth = new LinkedListNode(6);
  
  head.next = first;
  first.next = second;
  second.next = thrid;
  thrid.next = fourth;
  fourth.next = fifth;
  fifth.next = sixth;
  
  let prev;
  let array = [];
  let curr = first;
  
  while (curr !== null) {
    if (array.includes(curr.data)) {
      prev.next = curr.next.next;
      curr = prev;
    } else {
      array.push(curr.data);
    }
    prev = curr;
    curr = curr.next;
  }
  
  console.log(head);
  console.log(array);
  