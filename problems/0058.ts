// 58. Length of Last Word
// Difficulty: Easy
// Link: https://leetcode.com/problems/length-of-last-word/description/
// Date: 20 Oct 2025

function lengthOfLastWord(s: string): number {
  let lastMaxCount = 0;
  let localMaxCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      localMaxCount += 1;
    } else {
      if (localMaxCount > 0) {
        lastMaxCount = localMaxCount;
      }
      localMaxCount = 0;
    }
  }
  if (localMaxCount > 0) {
    lastMaxCount = localMaxCount;
  }

  return lastMaxCount;
}
