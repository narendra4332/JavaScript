let myArray = [1, 2, 3, 4, 5, 1, 2];
console.log(myArray)

let newArray = new Set(myArray);


console.log([...newArray])
console.log([...newArray].reverse())
console.log(Math.max(...myArray))
console.log(Math.max(...[...newArray]))

