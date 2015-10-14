// 703. Kth Largest Element in a Stream
// Difficulty: Easy
// Link: https://leetcode.com/problems/kth-largest-element-in-a-stream/description/
// Date: 14 Oct 2025

class KthLargest {
  minHeap: number[] = [];
  k: number;

  constructor(k: number, nums: number[]) {
    this.minHeap = [-1];
    this.k = k;

    for (let num of nums) {
      this.add(num);
    }
  }

  #pop(): number {
    if (this.#size() === 0) {
      return -1;
    }
    if (this.#size() === 1) {
      return this.minHeap.pop() ?? -1;
    }
    const res = this.minHeap[1];
    const poppedValue = this.minHeap.pop();
    if (poppedValue) {
      this.minHeap[1] = poppedValue;
    }

    let i = 1;

    while (2 * i < this.minHeap.length) {
      if (
        2 * i + 1 < this.minHeap.length &&
        this.minHeap[2 * i + 1] < this.minHeap[2 * i] &&
        this.minHeap[2 * i + 1] < this.minHeap[i]
      ) {
        [this.minHeap[2 * i + 1], this.minHeap[i]] = [
          this.minHeap[i],
          this.minHeap[2 * i + 1],
        ];
        i = 2 * i + 1;
      } else if (this.minHeap[2 * i] < this.minHeap[i]) {
        [this.minHeap[2 * i], this.minHeap[i]] = [
          this.minHeap[i],
          this.minHeap[2 * i],
        ];
        i = 2 * i;
      } else {
        break;
      }
    }
    return res;
  }

  #size(): number {
    return this.minHeap.length - 1;
  }

  #front(): number {
    if (this.#size() === 0) {
      return -1;
    }
    return this.minHeap[1];
  }

  add(val: number): number {
    this.minHeap.push(val);

    let i = this.#size();
    let parent = Math.floor(i / 2);

    while (i > 1 && this.minHeap[parent] > this.minHeap[i]) {
      [this.minHeap[parent], this.minHeap[i]] = [
        this.minHeap[i],
        this.minHeap[parent],
      ];
      i = parent;
      parent = Math.floor(i / 2);
    }

    if (this.#size() > this.k) {
      this.#pop();
    }

    return this.#front();
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
