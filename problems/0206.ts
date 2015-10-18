// 206. Reverse Linked List
// Difficulty: Easy
// Link: https://leetcode.com/problems/reverse-linked-list/description/
// Date: 18 Oct 2025

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let newHead = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = newHead;
    newHead = current;
    current = next;
  }
  return newHead;
}
