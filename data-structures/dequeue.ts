class _Node {
  public val: number;
  public prev: _Node | null;
  public next: _Node | null;

  constructor(val: number) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class MyDeque {
  public head: _Node | null;
  public tail: _Node | null;
  public size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  append(value: number) {
    const newNode = new _Node(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size += 1;
  }

  appendleft(value: number): void {
    const newNode = new _Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size += 1;
  }

  pop(): number {
    if (this.isEmpty()) {
      return -1;
    }
    const nodeToPop = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    }
    this.size -= 1;

    return nodeToPop!.val;
  }

  popleft(): number {
    if (this.isEmpty()) {
      return -1;
    }
    const nodeToPop = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
    }
    this.size -= 1;

    return nodeToPop!.val;
  }
}
