// 190. Reverse Bits
// Difficulty: Easy
// Link: https://leetcode.com/problems/reverse-bits/description/
// Date: 19 Oct 2025

function reverseBits(n: number): number {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    const lastBit = n & 1;
    const reversedLastBit = lastBit << (31 - i);
    res = res | reversedLastBit;
    n = n >> 1;
  }

  return res;
}
