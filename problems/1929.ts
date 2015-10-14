// 1929. Concatenation of Array
// Difficulty: Easy
// Link: https://leetcode.com/problems/concatenation-of-array/description/
// Date: 14 Oct 2025

function getConcatenation(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }
  const size: number = nums.length;
  const arr: number[] = new Array(2 * size);
  for (let i = 0; i < size; i++) {
    arr[i] = nums[i];
    arr[i + size] = nums[i];
  }
  return arr;
}
