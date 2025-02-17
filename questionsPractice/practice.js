// const Student = {
//     name: 'Jane',
//     age: 25,
// };


// const bioData = {
//     name: 'John',
//     age: 30,
//     greet: function () {
//         return 'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old'
//     }
// };

// console.log(bioData.greet.call(Student));

// console.log(isNaN("Java"));
// console.log(isNaN(12));
// console.log(parseInt("xyz"));
// console.log(parseInt("6"));


// console.log("20" + 10 + 10);


// const greet = (number) => {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return `${number} is not a prime number`
//         }
//         else {
//             return `${number} is a prime number`
//         }
//     }
// };
// output = greet(5);
// console.log(output)



// function Timer() {
//     this.seconds = 0;
//     setInterval(() => {
//         this.seconds++;  // Arrow function inherits `this` from outer context
//         console.log(this.seconds);
//     }, 1000);
// }

// new Timer();

// let year = 2024;
// if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// let fruits = ["Apple", "Banana", "Orange"];

// fruits.forEach(function (fruit, index) {
//     console.log(fruit, index);
// });

// fruits.forEach((fruit, index) => {
//     console.log(fruit, index);
// })

