// 374. Guess Number Higher or Lower
// Difficulty: Easy
// Link: http://leetcode.com/problems/guess-number-higher-or-lower/description/
// Date: 04 Oct 2025

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// the guess function is supplied by Leetcode's editor environment
function guess(num: number): number {
  return -1;
}

function guessNumber(n: number): number {
  let start = 1;
  let end = n;
  let pick;

  while (start <= end) {
    pick = Math.floor((start + end) / 2);

    if (guess(pick) === -1) {
      end = pick - 1;
    } else if (guess(pick) === 1) {
      start = pick + 1;
    } else {
      return pick;
    }
  }
  return -1;
}
