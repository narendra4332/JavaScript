// const calculator= (num1, num2, ans)=> {
//     if (ans === "+") {
//         return num1 + num2
//     }
//     else if (ans === "-") {
//         return num1 - num2
//     }
//     else {
//         return num1 * num2
//     }
// }
// console.log(calculator(5, 2, "+"))
// console.log(calculator(5, 2, "-"))
// console.log(calculator(5, 2))

// const sqr = (num1) => {
//     return `The squre of ${num1} is ${num1 * num1}`
// }
// console.log(sqr(5))

const string = (str) => {
    for (let i = str.length; i >= 0; i--) {
        console.log(str[i])
    }
}
string("narendra")