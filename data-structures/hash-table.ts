class HashTable {
  public capacity: number;
  public size: number;
  public map: ({ key: number; value: number } | null)[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.map = new Array(capacity).fill(null);
  }

  insert(key: number, value: number): void {
    let hashKey = key % this.capacity;
    while (true) {
      if (this.map[hashKey] === null) {
        this.map[hashKey] = { key, value };
        this.size += 1;
        if (this.size / this.capacity >= 0.5) {
          this.resize();
        }
        return;
      } else if (this.map[hashKey] && this.map[hashKey]!.key === key) {
        this.map[hashKey] = { key, value };
        return;
      }
      hashKey += 1;
      hashKey = hashKey % this.capacity;
    }
  }

  get(key: number): number {
    let hashKey = key % this.capacity;
    while (this.map[hashKey] !== null) {
      if (this.map[hashKey]!.key === key) {
        return this.map[hashKey]!.value;
      }
      hashKey++;
      hashKey = hashKey % this.capacity;
    }
    return -1;
  }

  remove(key: number): boolean {
    if (this.get(key) === -1) {
      return false;
    }
    let hashKey = key % this.capacity;
    while (true) {
      if (this.map[hashKey]!.key === key) {
        this.map[hashKey] = null;
        this.size -= 1;
        return true;
      }
      hashKey += 1;
      hashKey = hashKey % this.capacity;
    }
  }

  getSize(): number {
    return this.size;
  }

  getCapacity(): number {
    return this.capacity;
  }

  resize(): void {
    const existingMap = this.map.slice();
    this.capacity = 2 * this.capacity;
    this.map = new Array(this.capacity).fill(null);
    this.size = 0;

    for (let data of existingMap) {
      if (data) {
        this.insert(data.key, data.value);
      }
    }
  }
}
