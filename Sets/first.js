let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);
mySet.add("narendra")
mySet.add(["mango", "apple", "banana"])
console.log(mySet)


mySet.delete("narendra")
console.log(mySet)

console.log(mySet.has(1));

// mySet.clear();
// console.log(mySet)


// console.log(mySet);
// for (let value of mySet) {
//     console.log(value)
// }


mySet.forEach((value) => {
    console.log(value)
})






