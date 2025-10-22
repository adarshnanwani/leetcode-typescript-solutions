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

class LinkedList {
  public size: number;
  public head: _Node | null;
  public tail: _Node | null;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let current = this.head;
    let i = 0;
    while (current && i < index) {
      current = current.next;
      i++;
    }
    if (i === index - 1 && current) {
      return current.val;
    } else {
      return -1;
    }
  }

  insertHead(val: number): void {
    const new_Node = new _Node(val);
    if (!this.head) {
      this.head = new_Node;
      this.tail = new_Node;
    } else {
      new_Node.next = this.head;
      this.head.prev = new_Node;
      this.head = new_Node;
    }
    this.size += 1;
  }

  insertTail(val: number): void {
    const new_Node = new _Node(val);
    if (!this.tail) {
      this.head = new_Node;
      this.tail = new_Node;
    } else {
      this.tail.next = new_Node;
      new_Node.prev = this.tail;
      this.tail = new_Node;
    }
    this.size += 1;
  }

  remove(index: number): boolean {
    let curr = this.head;
    let i = 0;
    while (curr) {
      if (i === index) {
        if (curr === this.head && this.head.next) {
          this.head = this.head.next;
          this.head.prev = null;
        } else {
          const prev = curr.prev;
          if (prev) {
            prev.next = curr.next;
          }
          if (curr.next) {
            curr.next.prev = prev;
          }
          if (this.tail === curr) {
            this.tail = prev;
          }
        }

        this.size -= 1;
        if (this.size === 0) {
          this.head = null;
          this.tail = null;
        }
        return true;
      }
      i++;
      curr = curr.next;
    }
    return false;
  }

  getValues(): number[] {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    return values;
  }
}
