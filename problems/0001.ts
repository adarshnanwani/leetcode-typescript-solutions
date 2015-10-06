// 1. Two Sum
// Difficulty: Easy
// Link: https://leetcode.com/problems/two-sum/description/
// Date: 06 Oct 2025

function twoSum(nums: number[], target: number): number[] | undefined {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(nums[i], i);
    }
  }
}
