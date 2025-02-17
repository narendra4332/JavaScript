// Question: Given an array of words['apple', 'banana', 'apple', 'orange', 'banana'], write a function that uses a set to find the unique words in the array.

let myArray = ['apple', 'banana', 'apple', 'orange', 'banana']

function findUniqueWord(wordsArray) {
    let uniqueWordsSet = new Set(wordsArray);
    return Array.from(uniqueWordsSet);
}
let uniqueWords = findUniqueWord(myArray)
console.log(uniqueWords)