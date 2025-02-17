// let str = "hello"
// let ans = ""
// for (i = str.length - 1; i >= 0; i--) {
//     ans = ans + str[i]
// }
// console.log(ans)

for (i = 1; i <= 5; i++) {
    let row = " ";
    for (j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row)
}