/* 
Problem 1:
Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
*/

function sumArray(arr: number[]): number {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}

sumArray([1, 2, 3, 4, 5]);

/* 
  Note:
  1. Use Reduce method to add all numbers in the array
  2. acc is the accumulated total, starting from 0.
  3. num is the current element being added.
*/
