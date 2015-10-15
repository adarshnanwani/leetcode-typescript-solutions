// 215. Kth Largest Element in an Array
// Difficulty: Medium
// Link: https://leetcode.com/problems/kth-largest-element-in-an-array/description/
// Date: 15 Oct 2025

class MyMaxHeap {
  heap: number[];

  constructor() {
    this.heap = [-1];
  }

  add(num: number): void {
    this.heap.push(num);

    let i = this.heap.length - 1;
    let p = Math.floor(i / 2);

    while (i > 1 && this.heap[p] < this.heap[i]) {
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
      p = Math.floor(i / 2);
    }
  }
  pop() {
    if (this.heap.length === 1) {
      return -1;
    }
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const res = this.heap[1];
    const poppedValue = this.heap.pop();
    if (poppedValue) {
      this.heap[1] = poppedValue;
    }

    let i = 1;
    while (2 * i < this.heap.length) {
      if (
        2 * i + 1 < this.heap.length &&
        this.heap[2 * i + 1] > this.heap[2 * i] &&
        this.heap[2 * i + 1] > this.heap[i]
      ) {
        [this.heap[2 * i + 1], this.heap[i]] = [
          this.heap[i],
          this.heap[2 * i + 1],
        ];
        i = 2 * i + 1;
      } else if (this.heap[2 * i] > this.heap[i]) {
        [this.heap[2 * i], this.heap[i]] = [this.heap[i], this.heap[2 * i]];
        i = 2 * i;
      } else {
        break;
      }
    }

    return res;
  }
}

function findKthLargest(nums: number[], k: number): number {
  const maxHeap = new MyMaxHeap();

  for (let num of nums) {
    maxHeap.add(num);
  }

  while (k > 1) {
    maxHeap.pop();
    k--;
  }
  return maxHeap.pop() ?? -1;
}
