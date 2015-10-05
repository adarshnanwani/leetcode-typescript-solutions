// 875. Koko Eating Bananas
// Difficulty: Medium
// Link: https://leetcode.com/problems/koko-eating-bananas/description/
// Date: 05 Oct 2025

function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);
  let m: number;

  while (l < r) {
    m = Math.floor((l + r) / 2);

    const hours = piles.reduce(
      (sum, currentPile) => sum + Math.ceil(currentPile / m),
      0
    );

    if (hours <= h) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}
