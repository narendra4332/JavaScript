let array = [1, 2, 3, 4, 5];

// const multiply = array.forEach(element => {
//     console.log(element * 2)
// });

const multiply = array.map(element => {
    return element * 2
});
console.log(array);
console.log(multiply);

