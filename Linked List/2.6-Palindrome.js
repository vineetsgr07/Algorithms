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
  
  let kthElement = "d";
  let kthElementPointer;
  let curr = first;
  
  while (curr !== null) {
    if (curr.data === kthElement) {
      kthElementPointer = curr;
      break;
    }
    curr = curr.next;
  }
  
  console.log(kthElementPointer);
  