// 1700. Number of Students Unable to Eat Lunch
// Difficulty: Easy
// Link: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
// Date: 22 Oct 2025

function countStudents(students: number[], sandwiches: number[]): number {
  let studentsWhoWantSquareSandwiches = 0;
  let studentsWhoWantCircleSandwiches = 0;

  let squareSandwichCount = 0;
  let circleSandwichCount = 0;

  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === 0) {
      circleSandwichCount++;
    }
    if (sandwiches[i] === 1) {
      squareSandwichCount++;
    }
    if (students[i] === 0) {
      studentsWhoWantCircleSandwiches++;
    }
    if (students[i] === 1) {
      studentsWhoWantSquareSandwiches++;
    }
  }

  for (let s of sandwiches) {
    if (s === 0) {
      if (studentsWhoWantCircleSandwiches === 0) {
        return circleSandwichCount + squareSandwichCount;
      }
      circleSandwichCount--;
      studentsWhoWantCircleSandwiches--;
    }
    if (s === 1) {
      if (studentsWhoWantSquareSandwiches === 0) {
        return squareSandwichCount + circleSandwichCount;
      }
      squareSandwichCount--;
      studentsWhoWantSquareSandwiches--;
    }
  }

  return circleSandwichCount + squareSandwichCount;
}
