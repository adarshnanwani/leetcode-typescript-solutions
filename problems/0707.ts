// 707. Design Linked List
// Difficulty: Medium
// Link: https://leetcode.com/problems/design-linked-list/description/
// Date: 02 Oct 2025

class _Node {
  public val: any;
  public next: _Node | null;
  public prev: _Node | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class MyLinkedList {
  public head: _Node | null;
  public tail: _Node | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getNode(index: number): _Node | null {
    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    let current = this.head;
    let i;
    for (i = 0; i < index && current; i++) {
      current = current.next;
    }
    if (i === index - 1) {
      return current;
    }
    return null;
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    const node = this.getNode(index);
    if (node) {
      return node.val;
    }
    return -1;
  }

  addAtHead(val: number): void {
    const node = new _Node(val);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    this.length += 1;
    if (this.length === 1) {
      this.tail = this.head;
    }
  }

  addAtTail(val: number): void {
    const node = new _Node(val);

    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length += 1;
    if (this.length === 1) {
      this.head = this.tail;
    }
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) {
      return;
    }
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.length) {
      this.addAtTail(val);
      return;
    }
    const node = new _Node(val);
    const nodeAtIndex = this.getNode(index);
    const prev = nodeAtIndex!.prev;
    prev!.next = node;
    node.prev = prev;
    node.next = nodeAtIndex;
    nodeAtIndex!.prev = node;
    this.length += 1;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }

    let nodeToDelete = this.getNode(index);
    if (nodeToDelete) {
      const next = nodeToDelete.next;
      const prev = nodeToDelete.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (index === 0) {
        this.head = next;
      }
      if (index === this.length - 1) {
        this.tail = prev;
      }
      nodeToDelete = null;
      this.length -= 1;
    }
  }
}
