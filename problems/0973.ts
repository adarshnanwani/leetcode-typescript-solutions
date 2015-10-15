// 973. K Closest Points to Origin
// Difficulty: Medium
// Link: https://leetcode.com/problems/k-closest-points-to-origin/description/
// Date: 15 Oct 2025

type Point = number[];
class CustomValue {
  point?: Point;
  distance: number;
  constructor(point: Point) {
    this.point = point;
    this.distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);
  }
}

class MyHeap {
  heap: CustomValue[];
  constructor() {
    this.heap = [{ point: undefined, distance: 0 }];
  }
  add(customValue: CustomValue): void {
    this.heap.push(customValue);
    let i = this.heap.length - 1;
    let p = Math.floor(i / 2);

    while (i > 1 && this.heap[p].distance > this.heap[i].distance) {
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
      p = Math.floor(i / 2);
    }
  }

  pop(): CustomValue | undefined {
    if (this.heap.length === 1) {
      return undefined;
    }
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    let res = this.heap[1];
    const poppedValue = this.heap.pop();
    if (poppedValue) {
      this.heap[1] = poppedValue;
    }

    let i = 1;
    while (2 * i < this.heap.length) {
      if (
        2 * i + 1 < this.heap.length &&
        this.heap[2 * i + 1].distance < this.heap[2 * i].distance &&
        this.heap[2 * i + 1].distance < this.heap[i].distance
      ) {
        [this.heap[2 * i + 1], this.heap[i]] = [
          this.heap[i],
          this.heap[2 * i + 1],
        ];
        i = 2 * i + 1;
      } else if (this.heap[2 * i].distance < this.heap[i].distance) {
        [this.heap[2 * i], this.heap[i]] = [this.heap[i], this.heap[2 * i]];
        i = 2 * i;
      } else {
        break;
      }
    }
    return res;
  }
}

function kClosest(points: number[][], k: number): number[][] {
  let heap = new MyHeap();

  for (let point of points) {
    heap.add(new CustomValue(point as unknown as Point));
  }

  let res: Point[] = [];
  while (k > 0) {
    const data = heap.pop();
    if (data && data.distance !== undefined && data.point) {
      res.push(data.point);
    }
    k--;
  }
  return res;
}
