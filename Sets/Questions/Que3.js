let setA = new Set([1, 2, 3, 4])
let setB = new Set([3, 4, 5, 6])

let interSection = new Set();

setA.forEach((Element) => {
    if (setB.has(Element)) {
        interSection.add(Element)
    }
})

console.log("Intersection of Set A and Set B:", interSection)