// 20. Valid Parentheses
// Difficulty: Easy
// Link: https://leetcode.com/problems/valid-parentheses/description/
// Date: 18 Oct 2025

function isValid(s: string): boolean {
  const endBracketsMap: { [key: string]: string } = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (
      endBracketsMap[s[i]] &&
      stack[stack.length - 1] === endBracketsMap[s[i]]
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return Object.is(stack.length, 0);
}
