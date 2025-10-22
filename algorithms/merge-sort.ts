class Pair {
  public key: number;
  public value: string;

  constructor(key: number, value: string) {
    this.key = key;
    this.value = value;
  }
}

class Solution {
  mergeSort(pairs: Pair[], l = 0, r = pairs.length - 1): Pair[] {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      this.mergeSort(pairs, l, m);
      this.mergeSort(pairs, m + 1, r);
      this.merge(pairs, l, m, r);
    }
    return pairs;
  }

  merge(arr: Pair[], l: number, m: number, r: number) {
    const length1 = m - l + 1;
    const length2 = r - m;
    // Create empty temp arrays
    const L = new Array(length1);
    const R = new Array(length2);

    // Fill temp arrays
    for (let i = 0; i < length1; i++) {
      L[i] = arr[l + i];
    }
    for (let i = 0; i < length2; i++) {
      R[i] = arr[m + 1 + i];
    }
    // Merge arrays
    let k = l;
    let i = 0;
    let j = 0;
    while (i < length1 && j < length2) {
      if (L[i].key <= R[j].key) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
    // Push remaining items
    while (i < length1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    while (j < length2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }
}
