// // foreach() method calls a functon once for each array elements
// let number = [2, 4, 6, 8, 10];
// number.forEach((a) => {
//     console.log(a)
// })


// map()
// const num = [100, 300, 500, 600, 400];
// let newNum = num.map((Element, index) => {
//     return Element + " : " + index
// })
// console.log(newNum)

// const myObj = [
//     { name: "narendra", age: 22, city: "Bhopal" },
//     { name: "David", age: 23, city: "indore" },
//     { name: "isha", age: 24, city: "vidisha" }
// ]
// let myNewObj = myObj.map((Element) => {
//     return Element.name
// })
// console.log(myNewObj)


// flatMap()
// let myNumber = [[1, 2], [3, 4], [5, 6]]
// let myNewNumber = myNumber.flatMap((Element) => {
//     return [Element
// })
// console.log(myNewNumber)


// filter() 
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = number.filter((Element) => {
    return Element % 2 === 0
})
console.log(evenNumber)

//every() yadi all element kisi specified condition ko meet karte hai to it will return true else false
const number1 = [2, 4, 6, 8];
const allEven = number1.every((Element) => {
    return Element % 2 === 0
})
console.log(allEven)


// reduse() it is used to reduce arry elements in a single value.
const reduseNumber = [1, 2, 3, 4, 5];
const total = reduseNumber.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue
})
console.log(total)


//Some()
const someNumber = [1, 2, 3, 5];
const hasEven = someNumber.some((Element) => {
    return Element % 2 === 0
})
console.log(hasEven)

// from() it is used to make new arry from a iterable oject
const str = "narendra";
const charArray = Array.from(str);
console.log(charArray)

