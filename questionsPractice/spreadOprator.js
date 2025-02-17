// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5];
// console.log(arr2);

// let obj1 = { name: "narendra", age: 22 };
// let obj2 = { ...obj1, city: "bhopal" };
// console.log(obj2);


// function add(a, b, c) {
//     return a + b + c;
// }
// console.log(add(...arr1))

// ------------------------------------------------------------------
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [...arr1]
// console.log(arr2);

// ------------------------------------------------------------------
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let arr3 = [...arr1, ...arr2]
// console.log(arr3)
// ------------------------------------------------------------------

// let person = { name: "Raj", age: 25 };
// let person2 = { ...person, city: "Mumbai" };
// console.log(person2);
// ------------------------------------------------------------------
// let nums = [2, 4, 6];
// function Multiplay(a, b, c) {
//     return a * b * c;
// }
// console.log(Multiplay(...nums))
// ------------------------------------------------------------------
// let fruits = ["apple", "banana"];
// let fruits2 = [...fruits, "grape"];
// console.log(fruits2);
// ------------------------------------------------------------------
// let original = { name: "Alice", age: 30 };
// console.log(original)
// let copy = { ...original };
// console.log(copy)
// ------------------------------------------------------------------
// let numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// let newNumbers = [...numbers];
// console.log(newNumbers);
// ------------------------------------------------------------------
// let user = {
//     name: "Sam",
//     details: { age: 22, city: "Delhi" }
// };

// let user2 = { ...user, details: { ...user.details, gender: "mail" } };
// console.log(user2);
// ------------------------------------------------------------------

// let obj1 = { name: "Neha", age: 20 };
// let obj2 = { city: "Bangalore", country: "India" };
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// ------------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5];
numbers.shift()
numbers.pop()
let newNumbers = [...numbers];
console.log(newNumbers);
// or 
let newNumbers1 = numbers.filter(item => item !== 1 && item !== 5);
let newNumbers2 = [...newNumbers1];
console.log(newNumbers2);
// ------------------------------------------------------------------










