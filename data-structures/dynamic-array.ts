class DynamicArray {
  public capacity: number;
  public array: number[];
  public size: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.array = new Array(this.capacity).fill(-1);
    this.size = 0;
  }

  get(i: number): number {
    if (i < 0 || i >= this.size) {
      return -1;
    }
    return this.array[i];
  }

  set(i: number, n: number): void {
    this.array[i] = n;
  }

  pushback(n: number): void {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.array[this.size] = n;
    this.size += 1;
  }

  popback(): null | number {
    if (this.size === 0) return null;
    const value = this.array[this.size - 1];
    this.array[this.size - 1] = -1;
    this.size -= 1;
    return value;
  }

  resize(): void {
    this.capacity = 2 * this.capacity;
    const arr = new Array(this.capacity).fill(-1);
    for (let i = 0; i < this.array.length; i++) {
      arr[i] = this.array[i];
    }
    this.array = arr;
  }

  getSize(): number {
    return this.size;
  }

  getCapacity(): number {
    return this.capacity;
  }
}
