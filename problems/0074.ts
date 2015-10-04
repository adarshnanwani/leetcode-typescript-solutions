// 74. Search a 2D Matrix
// Difficulty: Medium
// Link: https://leetcode.com/problems/search-a-2d-matrix/description/
// Date: 04 Oct 2025

function searchMatrix(matrix: number[][], target: number): boolean {
  let start = 0;
  let end = matrix.length - 1;
  let mid;
  let arrayWithItem;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    const currentArray = matrix[mid];

    if (target < currentArray[0]) {
      end = mid - 1;
    } else if (target > currentArray[currentArray.length - 1]) {
      start = mid + 1;
    } else {
      arrayWithItem = currentArray;
      break;
    }
  }
  if (!arrayWithItem) {
    return false;
  }
  start = 0;
  end = arrayWithItem.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (target < arrayWithItem[mid]) {
      end = mid - 1;
    } else if (target > arrayWithItem[mid]) {
      start = mid + 1;
    } else {
      return true;
    }
  }

  return false;
}
