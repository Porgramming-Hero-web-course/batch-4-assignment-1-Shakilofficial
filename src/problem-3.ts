/* 
Problem 3:
Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
*/

function countWordOccurrences(sentence: string, word: string): number {
  const convertedSentence = sentence.toLowerCase();
  const convertedWord = word.toLowerCase();

  const words = convertedSentence.split(" ");
  const result = words.filter((word) => word === convertedWord).length;
  return result;
}

console.log(countWordOccurrences("I love typescript", "typescript"));

/* 
Note:
 1.convertedSentence and convertedWord to lowercase for case-insensitive comparison
 2. Split the sentence into words
 3. Count the targeted word from the words using filter method
*/
