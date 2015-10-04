// 23. Merge k Sorted Lists
// Difficulty: Hard
// Link: https://leetcode.com/problems/merge-k-sorted-lists/description/
// Date: 04 Oct 2025

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(
  lists: Array<ListNode | null>,
  l: number = 0,
  r: number = lists.length - 1
): ListNode | null | undefined {
  if (lists.length === 0) {
    return null;
  }
  if (l < r) {
    let m = Math.floor((l + r) / 2);
    const leftList = mergeKLists(lists, l, m);
    const rightList = mergeKLists(lists, m + 1, r);

    return merge(leftList, rightList);
  }
  return lists[l];
}

function merge(list1?: ListNode | null, list2?: ListNode | null) {
  if (list2 === undefined || list2 === null) {
    return list1;
  }
  if (list1 === undefined || list1 === null) {
    return list2;
  }
  let dummy = {
    val: 0,
    next: null,
  };
  let head = dummy;
  let current: ListNode = head;

  let temp1: ListNode | null = list1;
  let temp2: ListNode | null = list2;

  while (temp1 && temp2) {
    if (temp1.val < temp2.val) {
      current.next = temp1;
      current = current.next;
      temp1 = temp1.next;
    } else {
      current.next = temp2;
      current = current.next;
      temp2 = temp2.next;
    }
  }

  while (temp1) {
    current.next = temp1;
    current = current.next;
    temp1 = temp1.next;
  }
  while (temp2) {
    current.next = temp2;
    current = current.next;
    temp2 = temp2.next;
  }

  return head.next;
}
