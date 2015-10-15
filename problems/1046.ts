// 1046. Last Stone Weight
// Difficulty: Easy
// Link: https://leetcode.com/problems/last-stone-weight/description/
// Date: 15 Oct 2025

class MaxHeap {
  heap: number[];
  constructor() {
    this.heap = [-1];
  }
  size(): number {
    return this.heap.length - 1;
  }
  add(num: number): void {
    this.heap.push(num);
    let current = this.size();
    let parent = Math.floor(current / 2);

    while (current > 1 && this.heap[parent] < this.heap[current]) {
      [this.heap[parent], this.heap[current]] = [
        this.heap[current],
        this.heap[parent],
      ];
      current = parent;
      parent = Math.floor(current / 2);
    }
  }
  pop(): number {
    if (this.size() === 0) {
      return -1;
    }
    if (this.size() === 1) {
      return this.heap.pop()!;
    }

    const res = this.heap[1];
    this.heap[1] = this.heap.pop()!;

    let i = 1;

    while (2 * i <= this.size()) {
      if (
        2 * i + 1 <= this.size() &&
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

function lastStoneWeight(stones: number[]): number {
  let maxHeap = new MaxHeap();
  for (let stone of stones) {
    maxHeap.add(stone);
  }

  while (maxHeap.size() > 1) {
    let firstStone = maxHeap.heap[1];
    let secondStone =
      maxHeap.size() >= 3
        ? Math.max(maxHeap.heap[2], maxHeap.heap[3])
        : maxHeap.heap[2];

    if (secondStone) {
      const diff = firstStone - secondStone;

      maxHeap.pop();
      maxHeap.pop();

      if (diff > 0) {
        maxHeap.add(diff);
      }
    }
  }

  return maxHeap.heap[1] ?? 0;
}
