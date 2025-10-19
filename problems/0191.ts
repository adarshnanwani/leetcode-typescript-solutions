// 191. Number of 1 Bits
// Difficulty: Easy
// Link: https://leetcode.com/problems/number-of-1-bits/description/
// Date: 19 Oct 2025

function hammingWeight(n: number): number {
  let count: number = 0;
  while (n > 0) {
    if ((n & 1) === 1) {
      count += 1;
    }
    n = n >> 1;
  }
  return count;
}
