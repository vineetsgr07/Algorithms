/**
 *Sum List: You have two numbers respectivey by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
function that adds the two numbers and returns the sum as a linked list.*/

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

let head1Curr = first;
let head2Curr = fourth;
let carry = 0;
let number = "";

while (head1Curr !== null || head2Curr !== null) {
  let sum = head1Curr.data + head2Curr.data + carry;
  carry = Math.floor(sum / 10);
  let mod = sum % 10;
  number += mod;

  head1Curr = head1Curr.next;
  head2Curr = head2Curr.next;
}

console.log(
  number
    .toString()
    .split("")
    .reverse()
    .join("")
);
