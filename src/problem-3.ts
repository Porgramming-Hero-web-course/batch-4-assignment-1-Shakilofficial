/* 
Problem 3:
Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
*/

function countWordOccurrences(sentence: string, word: string): number {
  const convertedSentence = sentence.toLowerCase();
  const convertedWord = word.toLowerCase();

  const words = convertedSentence.split(/\W+/);
  const result = words.filter((word) => word === convertedWord).length;
  return result;
}

countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

/* 
Note:
 1.convertedSentence and convertedWord to lowercase for case-insensitive comparison
 2. Split the sentence into words
 3. Count the targeted word from the words using filter method
*/
