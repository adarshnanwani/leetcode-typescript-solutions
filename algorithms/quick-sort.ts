class Pair {
  public key: number;
  public value: string;

  constructor(key: number, value: string) {
    this.key = key;
    this.value = value;
  }
}

class Solution {
  quickSort(pairs: Pair[], s = 0, e = pairs.length - 1): Pair[] {
    // if single index then return
    if (e - s + 1 <= 1) {
      return pairs;
    }
    // set a pivot
    const pivot = pairs[e];
    let left = s;
    // loop through the left and do swaps where value is less than pivot
    for (let i = s; i < e; i++) {
      if (pairs[i].key < pivot.key) {
        [pairs[left], pairs[i]] = [pairs[i], pairs[left]];
        left++;
      }
    }
    // do swap with pivot value
    [pairs[e], pairs[left]] = [pairs[left], pairs[e]];

    // do quicksort on left and right sub arrays
    this.quickSort(pairs, s, left - 1);
    this.quickSort(pairs, left + 1, e);
    return pairs;
  }
}
