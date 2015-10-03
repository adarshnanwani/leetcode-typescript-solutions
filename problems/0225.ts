// 225. Implement Stack using Queues
// Difficulty: Easy
// Link: https://leetcode.com/problems/implement-stack-using-queues/description/
// Date: 03 Oct 2025

class MyQueue {
  public queue: number[];
  constructor() {
    this.queue = [];
  }
  push(x: number): void {
    this.queue.push(x);
  }
  peek(): number | undefined {
    if (this.size() > 0) {
      return this.queue[0];
    }
    return;
  }
  pop() {
    if (this.size() > 0) {
      return this.queue.shift();
    }
    return;
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
}

class MyStack {
  private firstQueue: MyQueue;
  private secondQueue: MyQueue;

  constructor() {
    this.firstQueue = new MyQueue();
    this.secondQueue = new MyQueue();
  }

  push(x: number): void {
    this.firstQueue.push(x);
  }

  pop(): number | undefined {
    let valueToPop;
    const firstQueueSize = this.firstQueue.size();

    for (let i = 0; i < firstQueueSize; i++) {
      const poppedValue = this.firstQueue.pop();
      if (poppedValue && i === firstQueueSize - 1) {
        valueToPop = poppedValue;
      } else if (poppedValue) {
        this.secondQueue.push(poppedValue);
      }
    }
    const secondQueueSize = this.secondQueue.size();
    for (let i = 0; i < secondQueueSize; i++) {
      const poppedValue = this.secondQueue.pop();
      if (poppedValue) {
        this.firstQueue.push(poppedValue);
      }
    }

    return valueToPop;
  }

  top(): number | undefined {
    let valueOnTop;
    const firstQueueSize = this.firstQueue.size();

    for (let i = 0; i < firstQueueSize; i++) {
      const poppedValue = this.firstQueue.pop();
      if (i === firstQueueSize - 1) {
        valueOnTop = poppedValue;
      }
      if (poppedValue) {
        this.secondQueue.push(poppedValue);
      }
    }
    const secondQueueSize = this.secondQueue.size();
    for (let i = 0; i < secondQueueSize; i++) {
      const poppedValue = this.secondQueue.pop();
      if (poppedValue) {
        this.firstQueue.push(poppedValue);
      }
    }

    return valueOnTop;
  }

  empty(): boolean {
    return this.firstQueue.isEmpty();
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
