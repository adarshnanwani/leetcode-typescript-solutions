// 3. Longest Substring Without Repeating Characters
// Difficulty: Medium
// Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Date: 24 Oct 2025

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) return 1;
  let l = 0;
  let substrLen = 0;
  let charSet = new Set();

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }

    substrLen = Math.max(substrLen, r - l + 1);
    charSet.add(s[r]);
  }

  return substrLen;
}
