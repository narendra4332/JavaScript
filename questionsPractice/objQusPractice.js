// let person = {
//     name: "Ravi",
//     age: 28,
//     city: "Delhi"
// };
// person.school = "XYZ"
// console.log(person);
// console.log({ ...person, school: "XYZ" });
// ------------------------------------------------------------

// let book = {
//     title: "JavaScript Basics",
//     author: "John Doe",
//     price: 500
// };
// book.price = 550
// console.log(book);
// console.log({ ...book, price: 550 });
// ------------------------------------------------------------
// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// console.log(car);
// delete car.year
// console.log(car);
// ------------------------------------------------------------

// let user = {
//     name: "Sam",
//     age: 22,
//     city: "Mumbai"
// };

// let totalProperties = Object.keys(user).length
// console.log(totalProperties);
// // or
// let count = 0;
// for (let key in user) {
//     if (user.hasOwnProperty(key)) {
//         count++;
//     }
// }
// console.log(count);
// ------------------------------------------------------------

// let obj1 = { name: "Nina", country: "India" };
// let obj2 = { age: 30, city: "Chennai" };

// let newObj1 = Object.assign({}, obj1, obj2);
// console.log(newObj1);
// // or
// let newObj2 = { ...obj1, ...obj2 };
// console.log(newObj2);
// ------------------------------------------------------------

// let user = {
//     name: "John",
//     address: {
//         city: "New York",
//         zip: 10001
//     }
// };
// console.log(user.address.zip)

// ------------------------------------------------------------
// let product = {
//     name: "Laptop",
//     price: 50000,
//     brand: "HP"
// };
// console.log('price' in product);
// console.log(product.hasOwnProperty('price'));
// ------------------------------------------------------------
let person = {
    name: "Ravi",
    age: 28,
    city: "Delhi"
};

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(key + ": " + person[key]);
//     }
// }
// or 
Object.entries(person).forEach(([key, value]) => {
    console.log(key + ": " + value)
});
// ------------------------------------------------------------

