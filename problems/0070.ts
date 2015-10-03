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
