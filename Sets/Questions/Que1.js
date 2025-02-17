// Create a Set of numbers. Add the numbers 1, 2, 3, 4, 5 to the set. Check if the number 3 exists in the set. Remove the number 3 and verify if it was removed.

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);

let exist = mySet.has(3)
console.log(`Dose 3 exist in the set ? ${exist}`)
mySet.delete(3)
let existAfterRemovel = mySet.has(3)
console.log(`Dose 3 exist in the set after removel ? ${existAfterRemovel}`)

