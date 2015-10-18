// 155. Min Stack
// Difficulty: Medium
// Link: https://leetcode.com/problems/min-stack/description/
// Date: 18 Oct 2025

class MinStack {
  stack: number[];
  minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (
      this.minStack.length === 0 ||
      val < this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    } else {
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
