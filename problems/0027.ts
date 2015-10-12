// 27. Remove Element
// Difficulty: Easy
// Link: https://leetcode.com/problems/remove-element/description/
// Date: 12 Oct 2025

function removeElement(nums: number[], val: number): number {
  let i: number = 0;
  let replaced: number = 0;

  while (i < nums.length - replaced) {
    if (Object.is(nums[i], val)) {
      nums.splice(i, 1);
      nums.push(val);
      replaced++;
    } else {
      i++;
    }
  }

  return nums.length - replaced;
}
