// 146. LRU Cache
// Difficulty: Medium
// Link: https://leetcode.com/problems/lru-cache/description/
// Date: 16 Oct 2025

class ListNode {
  key: number;
  prev: ListNode | null;
  next: ListNode | null;
  constructor(key: number) {
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
  head: ListNode | null;
  tail: ListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(key: number) {
    const newNode = new ListNode(key);
    if (!this.head && !this.tail) {
      this.head = this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  popHead() {
    if (!this.head) {
      return;
    }
    const current = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = this.tail = null;
    }

    return current;
  }

  remove(key: number) {
    if (!this.head) {
      return;
    }
    let current: ListNode | null = this.head;

    while (current) {
      if (current.key === key) {
        if (current === this.head) {
          this.popHead();
        } else if (current === this.tail) {
          const prev = current.prev;
          if (prev) {
            this.tail = prev;
            prev.next = null;
          } else {
            this.popHead();
          }
        } else {
          const prev = current.prev;
          const next = current.next;
          if (prev) prev.next = next;
          if (next) next.prev = prev;
        }
      }
      current = current.next;
    }
  }
}

class LRUCache {
  list: DLL;
  capacity: number;
  cache: Map<number, number>;

  constructor(capacity: number) {
    this.list = new DLL();
    this.capacity = capacity;
    this.cache = new Map<number, number>();
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      this.list.remove(key);
      this.list.add(key);
      return this.cache.get(key)!;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.list.remove(key);
    }
    this.list.add(key);

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      const poppedNode = this.list.popHead();

      if (poppedNode) {
        this.cache.delete(poppedNode.key);
      }
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
