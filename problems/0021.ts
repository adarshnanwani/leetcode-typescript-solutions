// 21. Merge Two Sorted Lists
// Difficulty: Easy
// Link: https://leetcode.com/problems/merge-two-sorted-lists/description/
// Date: 15 Oct 2025

class ListNode {
  val: number | null;
  prev: ListNode | null;
  next: ListNode | null;
  constructor(val?: number) {
    this.val = val === undefined ? null : val;
    this.prev = null;
    this.next = null;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummyHead = new ListNode();
  let curr = dummyHead;

  let curr1 = list1;
  let curr2 = list2;

  while (curr1 && curr2 && curr1.val && curr2.val) {
    if (curr1.val < curr2.val) {
      curr.next = curr1;
      curr1 = curr1.next;
    } else {
      curr.next = curr2;
      curr2 = curr2.next;
    }
    curr = curr.next;
  }
  while (curr1) {
    curr.next = curr1;
    curr1 = curr1.next;
    curr = curr.next;
  }
  while (curr2) {
    curr.next = curr2;
    curr2 = curr2.next;
    curr = curr.next;
  }
  return dummyHead.next;
}
