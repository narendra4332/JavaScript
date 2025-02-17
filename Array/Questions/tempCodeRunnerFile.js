let myArr = [2, 3, 4, 5, 8];
let myArr1 = myArr[0];

for (let i = 1; i < myArr.length; i++) {
    if (myArr[i] > myArr1) {
        myArr1 = myArr[i]
    }

}
console.log(myArr1)