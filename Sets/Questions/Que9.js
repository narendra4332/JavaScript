// Question: Create a Set of numbers and iterate through it using the forEach method.Print each number and its square.

let thisSet = new Set([1, 2, 3, 4, 5, 6]);

thisSet.forEach((number) => {
    console.log(`Number: ${number}, Square: ${number * number}`);
})