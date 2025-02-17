// Write a function that takes an array of numbers and returns an array of the squares of only the even numbers
function squares_of_even_numbers(numbers) {
    let even_numbers = numbers.filter(num => num % 2 === 0);
    let squares = even_numbers.map(num => num ** 2);
    return squares;
}
console.log(squares_of_even_numbers([1, 2, 3, 4, 5, 6, 7]));

// Given an array of products with name and price, find the product with the highest price using reduce().


// Write a function that takes an array of strings and returns an array of strings that have more than 5 characters, converted to uppercase.Use filter() and map().
function long_strings(strings) {
    let long_strings = strings.filter(str => str.length > 5);
    let upper_case_strings = long_strings.map(str => str.toUpperCase())
    return upper_case_strings;
}
console.log(long_strings(["hello", "Narendra", "abcdef", "def", "ghi"]));


// Given an array of objects representing purchases(e.g., { item: 'Apple', price: 1.5 }), calculate the total cost using reduce().
const purchases = [
    { item: 'Apple', price: 1.5 },
    { item: 'Banana', price: 0.8 },
    { item: 'Milk', price: 2.5 }
];

function calculate_total_cost(purchases) {
    let total_cost = purchases.reduce((acc, purchase) => acc + purchase.price, 0)
    return total_cost;
}
console.log(calculate_total_cost(purchases));