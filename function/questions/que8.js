// Reverse an Array
function reverseArray(arr) {
    let newArr = []
    for (i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverseArray([1, 2, 3, 4, 5]));

