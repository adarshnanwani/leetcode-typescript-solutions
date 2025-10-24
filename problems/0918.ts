// 918. Maximum Sum Circular Subarray
// Difficulty: Medium
// Link: https://leetcode.com/problems/maximum-sum-circular-subarray/description/
// Date: 23 Oct 2025

function maxSubarraySumCircular(nums: number[]): number {
  let globalMax = nums[0];
  let globalMin = nums[0];
  let currentMax = 0;
  let currentMin = 0;

  let total = 0;

  for (let num of nums) {
    currentMax = Math.max(currentMax + num, num);
    currentMin = Math.min(currentMin + num, num);

    globalMax = Math.max(globalMax, currentMax);
    globalMin = Math.min(globalMin, currentMin);

    total += num;
  }

  if (globalMax < 0) {
    return globalMax;
  }
  return Math.max(globalMax, total - globalMin);
}
