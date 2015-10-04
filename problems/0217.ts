// 217. Contains Duplicate
// Difficulty: Easy
// Link: https://leetcode.com/problems/contains-duplicate/description/
// Date: 04 Oct 2025

var containsDuplicate = function (nums: number[]): boolean {
  const set = new Set<number>();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};
