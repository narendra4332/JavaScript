let setA = new Set([1, 2, 3, 4])
let setB = new Set([3, 4, 5, 6])

let differenceSet = new Set();

// setA.forEach((Element) => {
//     if (setA.has(Element) !== setB.has(Element)) {
//         differenceSet.add(Element)
//     }
// })
// console.log("Difference between Set A and Set B:", differenceSet);

setA.forEach((Element) => {
    if (!setB.has(Element)) {
        differenceSet.add(Element)
    }
})
console.log("Difference between Set A and Set B:", differenceSet);
