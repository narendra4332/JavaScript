let arr = [1, 2, 3, 4, 5, 3, 2, 1];

//  Use a Set to remove duplicates
let uniqueSet = new Set(arr);

// onvert the Set back to an array
let uniqueArray = Array.from(uniqueSet);

// we can also use spread oprator
// let uniqueArray1 = [...uniqueSet];
console.log(uniqueArray);