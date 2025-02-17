function arrFunction(arr) {
    arr.forEach(element => {
        console.log(element)
    });

    for (i = 0; i <= arr.length; i++) {
        console.log(arr[i])
    }
}
arrFunction([1, 2, 3, 4, 5]);