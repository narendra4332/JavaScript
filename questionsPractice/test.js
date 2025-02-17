// 1 Reverse a String
// Question: Write a function to reverse a given string.

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello World"))

// 2. Check for Palindrome
// Question: Write a function to check if a string is a palindrome.
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("radar"));


// 3. Sum of Numbers
// Question: Write a function to sum all numbers in an array.
function sumNumbers(arr) {
    return arr.reduce((a, b) => a + b);
}
console.log(sumNumbers([1, 2, 3, 4, 5]));


// 4. Add Two Numbers
// Question: Write a function to add two numbers.
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumbers(10, 20));

// 5. Find the Largest of Two Numbers
// Question: Write a function to find the larger of two numbers.
function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else
        return num2;
}
console.log(findLargest(10, 20));

// 6. Reverse an Array
// Question: Write a function to reverse an array.
function reverseArray(arr) {
    return arr.reverse()
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// 7. Check If an Array is Empty
// Question: Write a function to check if an array is empty.
function checkEmptyArray(arr) {
    if (arr.length === 0) {
        return true
    }
    else
        return false
}
console.log(checkEmptyArray([]));

// 8. Find the Length of a String
// Question: Write a program to find the length of a string.
function findLength(str) {
    return str.length;
}
console.log(findLength("Hello World"));




