// 1472. Design Browser History
// Difficulty: Medium
// Link: https://leetcode.com/problems/design-browser-history/description/
// Date: 02 Oct 2025

class _Node {
  public val: string;
  public next: _Node | null;
  public prev: _Node | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class MyLinkedList {
  public size: number;
  public head: _Node | null;
  public tail: _Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getNode(index: number): _Node | null {
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

  get(index: number): string | null {
    const node = this.getNode(index);
    if (node) {
      return node.val;
    } else {
      return null;
    }
  }

  add(val: string) {
    const node = new _Node(val);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size += 1;
  }
  addToIndex(val: string, index: number) {
    const newNode = new _Node(val);
    const nodeAtIndex = this.getNode(index);

    if (nodeAtIndex) {
      let next = nodeAtIndex.next;
      nodeAtIndex.next = newNode;
      newNode.prev = nodeAtIndex;
      if (next) {
        next.prev = null;
        next = null;
      }
      this.size = index + 2;
    }
  }
}
// lc go fb li
class BrowserHistory {
  private currentIndex: number;
  private list: MyLinkedList;

  constructor(homepage: string) {
    this.list = new MyLinkedList();
    this.list.add(homepage);
    this.currentIndex = 0;
  }

  visit(url: string): void {
    this.list.addToIndex(url, this.currentIndex);
    this.currentIndex += 1;
  }

  back(steps: number): string | null {
    this.currentIndex = this.currentIndex - steps;
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    return this.list.get(this.currentIndex);
  }

  forward(steps: number): string | null {
    this.currentIndex = this.currentIndex + steps;
    if (this.currentIndex >= this.list.size) {
      this.currentIndex = this.list.size - 1;
    }
    return this.list.get(this.currentIndex);
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
