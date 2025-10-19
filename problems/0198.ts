// 198. House Robber
// Difficulty: Medium
// Link: https://leetcode.com/problems/house-robber/description/
// Date: 19 Oct 2025

function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  const cache: { [key: number]: number } = {};

  function robHouse(nums: number[]) {
    cache[0] = nums[0];
    cache[1] = Math.max(nums[0], nums[1]);
    let localMax = cache[1];

    for (let i = 2; i < nums.length; i++) {
      cache[i] = Math.max(localMax, nums[i] + cache[i - 2]);
      localMax = cache[i];
    }

    return localMax;
  }
  return robHouse(nums);
}
