// Push() arry ke end me ek ya zada element add karne ke liye.
let myArr = []
myArr.push("white", "black", "green");
console.log(myArr)

// pop() Arry le end se ek element remove karne ke liye.
myArr.pop()
console.log(myArr)

// shift() arry ke start se ek element remove karta hai 
myArr.shift();
console.log(myArr)

// unshift() arry ke start main ek ya zada element remove karta hai 
myArr.unshift("red", "orange");
console.log(myArr);

// slice() array ka ek part nikaal kar ek naya array banata hai 
let myArr1 = myArr.slice(0, 3);
console.log(myArr1);

// toString () convert an arry to a string of array values
let conInStr = myArr.toString();
console.log(conInStr);

// join() it is same as toString but in additione you can specify the separator 
let conInStr1 = myArr.join("*");
console.log(conInStr1);

// concat() create a new array by merging exixting array 
