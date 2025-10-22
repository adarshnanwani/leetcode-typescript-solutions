class Pair {
  public key: number;
  public value: string;

  constructor(key: number, value: string) {
    this.key = key;
    this.value = value;
  }
}

class Solution {
  insertionSort(pairs: Pair[]): Pair[][] {
    if (pairs.length === 0) {
      return [];
    }
    let list = [pairs.slice()];
    for (let i = 0; i < pairs.length - 1; i++) {
      let j = i;
      while (j >= 0 && pairs[j].key > pairs[j + 1].key) {
        [pairs[j], pairs[j + 1]] = [pairs[j + 1], pairs[j]];
        j--;
      }
      list.push(pairs.slice());
    }
    return list;
  }
}
