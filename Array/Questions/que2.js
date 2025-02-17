// Write a function that takes an array of numbers and returns the maximum number.
function maximumNumber(num) {
    // let newArr = num.sort((a, b) => b - a)
    // console.log(newArr[0])

    let max = [0]
    for (i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max
}
console.log(maximumNumber([5, 2, 8, 7, 9]));



