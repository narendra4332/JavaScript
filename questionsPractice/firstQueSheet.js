// let a = 50, b = 15, c = 8;

// if (a > b && a > c) {
//     console.log(a, "is greater", b, "and", c);
// }
// else if (b > a && b > c) {
//     console.log(b, "is greater", a, "and", c);
// }
// else {
//     console.log(c, "is greater", a, "and", b);
// }
// ----------------------------------------------------------------------

// let num = 4;
// let result = 1;
// for (let i = 1; i <= num; i++) {
//     result *= i;
// }
// console.log(result);
// ----------------------------------------------------------------------
// let arr = [12, 5, 8, 20, 2];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);
// ----------------------------------------------------------------------
// let str = "JavaScript";
// let result = str.split("").reverse().join("")
// console.log(result);
// // or
// let str1 = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     str1 += str[i]
// }
// console.log(str1);
// ----------------------------------------------------------------------
// let str = "madam";
// let result = str === str.split("").reverse().join("");
// console.log(result);
// ----------------------------------------------------------------------

// sum of array
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);
// // or
// let sum1 = numbers.reduce((a, b) => a + b, 0);
// console.log(sum1);
// ----------------------------------------------------------------------
// duplicate remove
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let result = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(result);

// ----------------------------------------------------------------------
// Fibonacci series print karo
// function printFibonacci(n) {
//     let fibSequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
//     }
//     console.log(fibSequence)
// }
// printFibonacci(6)
// ----------------------------------------------------------------------

// let num = 1234;
// let result = num.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
// console.log(result);
// ----------------------------------------------------------------------

// let char = "A";
// char = char.toLowerCase();
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log("vowel");
// }
// else {
//     console.log("consonant");
// }
// ----------------------------------------------------------------------
// let arr = [45, 12, 78, 3, 56];
// let result = arr.sort((a, b) => a - b);
// console.log(result[0]);
// or
// let min = Math.min(...arr)
// console.log(min)
// or
// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min);
// ----------------------------------------------------------------------

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//     let Multiplay = i * num
//     console.log(`${num} x ${i} = ${Multiplay}`);
// }
// ----------------------------------------------------------------------
// let sentence = "I like JavaScript.";
// let words = sentence.split(" ");
// let result = words[2] = "coding"
// let newSentence = words.join(" ");
// console.log(newSentence)
// ----------------------------------------------------------------------
