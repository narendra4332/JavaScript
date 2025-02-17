// // flat() method creates a new array with suub-array elements concatenated to spesified depth

// const myArr = [[1, 2], [3, 4], [5, 6]];
// const newArr = myArr.flat();
// console.log(newArr);

// // flatmap() method first ,aps all Elements of an array ans then creates a new array by flattening the array

// const myArr1 = [1, 2, 3, 4];
// const newArr1 = myArr1.flatMap(Element => Element * 2);
// console.log(newArr1)

// // flat()
// const myArr2 = [[1, 2], [3, [7, 8], 4]];
// const flatArr = myArr2.flat(Infinity);
// console.log(flatArr)


// splice() method can be used to add new items to an array

const fruits = ["banana", "orange", "papya"]
fruits.splice(2, 0, "lemon", "kiwi");
console.log(fruits);
fruits.splice(0, 2);
console.log(fruits)