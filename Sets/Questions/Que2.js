let setA = new Set([1, 2, 3, 4])
let setB = new Set([3, 4, 5, 6])

// 1
let setC = new Set([...setA, ...setB]);
console.log("Union of Set A and Set B:", setC)

// 2
let unickSet = new Set();

setA.forEach((Element) => unickSet.add(Element))
setB.forEach((Element) => unickSet.add(Element))
console.log("Union of Set A and Set B:", unickSet)


