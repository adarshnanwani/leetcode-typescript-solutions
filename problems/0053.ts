// 53. Maximum Subarray
// Difficulty: Medium
// Link: https://leetcode.com/problems/maximum-subarray/description/
// Date: 22 Oct 2025

// Note: Kadene's Algorithm
// Time Complexity - O(n)

function maxSubArray(nums: number[]): number {
  let maxSum = -Infinity; // to account for the case if every value in the array is negative
  let currentSum = 0;

  for (let num of nums) {
    currentSum = Math.max(currentSum, 0);
    currentSum += num;
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

// Brute-force method
// Time Complexity - O(n^2)

// function maxSubArray(nums: number[]): number {
//     let maxSum = nums[0];
//     for(let i = 0; i < nums.length; i++) {
//         let currentSum = 0
//         for(let j = i; j < nums.length; j++) {
//             currentSum += nums[j]
//             maxSum = Math.max(maxSum, currentSum)
//         }
//     }
//     return maxSum
// };
