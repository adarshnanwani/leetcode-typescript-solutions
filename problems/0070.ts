// 70. Climbing Stairs
// Difficulty: Easy
// Link: https://leetcode.com/problems/climbing-stairs/description/
// Date: 03 Oct 2025

function climbStairs(n: number): number {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = one;
    one = one + two;
    two = temp;
  }

  return one;
}

// Dynamic Programming (Top Down) solution

function climbStairs2(n: number): number {
  const cache: { [key: number]: number } = {};

  function climb(i: number) {
    if (cache[i]) {
      return cache[i];
    }
    if (i > n) {
      return 0;
    }
    if (i === n) {
      return 1;
    }

    cache[i] = climb(i + 1) + climb(i + 2);
    return cache[i];
  }
  return climb(0);
}
