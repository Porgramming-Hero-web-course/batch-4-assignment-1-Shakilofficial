/* 
Problem 2:
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
*/

function removeDuplicates(arr: number[]): number[] {
  return [...new Set(arr)];
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

/* 
Note: Use Set to remove duplicates, then spread it back into an array
*/
