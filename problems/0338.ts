// 338. Counting Bits
// Difficulty: Easy
// Link: https://leetcode.com/problems/counting-bits/description/
// Date: 19 Oct 2025

function countBits(n: number): number[] {
  let res: number[] = [];

  function bitCounter(k: number) {
    let count = 0;
    while (k > 0) {
      if ((k & 1) === 1) {
        count += 1;
      }
      k = k >> 1;
    }
    return count;
  }

  for (let i = 0; i <= n; i++) {
    res.push(bitCounter(i));
  }

  return res;
}
