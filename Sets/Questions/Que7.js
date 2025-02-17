// Question: Create a set, add some elements to it, and then write a function to check if the set is empty.

let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(4);
// mySet.add(5);
function checkEmptySet(mySet) {
    return mySet.size === 0;
}
let result = checkEmptySet(mySet)
console.log("Is the set empty ?", result);