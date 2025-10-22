class MinHeap {
  private minHeap: number[];

  constructor() {
    this.minHeap = [-1];
  }

  push(val: number): void {
    this.minHeap.push(val);

    let i = this.minHeap.length - 1;
    let p = Math.floor(i / 2);

    while (i > 1 && this.minHeap[p] > this.minHeap[i]) {
      [this.minHeap[p], this.minHeap[i]] = [this.minHeap[i], this.minHeap[p]];
      i = p;
      p = Math.floor(i / 2);
    }
  }

  pop(): number {
    if (this.minHeap.length === 1) {
      return -1;
    }
    if (this.minHeap.length === 2) {
      return this.minHeap.pop()!;
    }
    let res = this.minHeap[1];
    this.minHeap[1] = this.minHeap.pop()!;
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

  top(): number {
    if (this.minHeap.length === 1) {
      return -1;
    }
    return this.minHeap[1];
  }

  heapify(nums: number[]): void {
    this.minHeap = nums;
    this.minHeap.push(this.minHeap[0]);
    this.minHeap[0] = -1;

    let curr = Math.floor((this.minHeap.length - 1) / 2);

    while (curr > 0) {
      let i = curr;
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
      curr--;
    }
  }
}
