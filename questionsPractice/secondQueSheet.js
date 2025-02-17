// function higherOrder(x, y, opration) {
//     return opration(x, y);
// }

// function add(x, y) {
//     return x + y
// }

// console.log(higherOrder(5, 10, add))


let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = Math.random() > 0.5;

        if (success) {
            resolve("Success! 3 seconds baad message received.")
        }
        else {
            reject("Error! 3 seconds baad kuch galat ho gaya.");
        }
    }, 3000)
})

myPromise.then((message) => {
    console.log(message);
})
    .catch((error) => {
        console.log(error);
    });

