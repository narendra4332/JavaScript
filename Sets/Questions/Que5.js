// Question: Create a set A = { 1, 2, 3} and a set B = { 1, 2, 3, 4, 5}.Write a function that checks if set A is a subset of set B. (A set A is a subset of set B if all elements of A are also in B.)


let setA = new Set([1, 2, 3]);
let setB = new Set([2, 3, 4, 5, 1]);
// let result = new Set();

// setB.forEach((Element) => {
//     if (setA.has(Element)) {
//         result = true
//     }
//     else {
//         result = false
//     }
//     return result
// })
// console.log(result)

function subSet(setA, setB) {
    for (let Element of setA) {
        // If an element in setA is not found in setB, return false
        if (!setB.has(Element)) {
            return false
        }
    }
    // If all elements of setA are in setB, return true
    return true

}
let result = subSet(setA, setB)
console.log("Is Set A a subset of Set B?", result);