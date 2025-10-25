// 2. Add Two Numbers
// Difficulty: Medium
// Link: https://leetcode.com/problems/add-two-numbers/description/
// Date: 25 Oct 2025

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carryOver = 0;

  let dummy = new ListNode();
  let current = dummy;

  let currentL1 = l1;
  let currentL2 = l2;

  while (currentL1 && currentL2) {
    let sum = currentL1.val + currentL2.val + carryOver;
    if (sum > 9) {
      carryOver = 1;
      sum = sum - 10;
    } else {
      carryOver = 0;
    }
    const newNode = new ListNode(sum);
    current.next = newNode;
    current = newNode;
    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
  }

  while (currentL1) {
    let sum = currentL1.val + carryOver;
    if (sum > 9) {
      carryOver = 1;
      sum = sum - 10;
    } else {
      carryOver = 0;
    }
    const newNode = new ListNode(sum);
    current.next = newNode;
    current = newNode;
    currentL1 = currentL1.next;
  }

  while (currentL2) {
    let sum = currentL2.val + carryOver;
    if (sum > 9) {
      carryOver = 1;
      sum = sum - 10;
    } else {
      carryOver = 0;
    }
    const newNode = new ListNode(sum);
    current.next = newNode;
    current = newNode;
    currentL2 = currentL2.next;
  }

  if (carryOver > 0) {
    const newNode = new ListNode(carryOver);
    current.next = newNode;
  }

  return dummy.next;
}
