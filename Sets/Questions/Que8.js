// Question: Given an array of objects: [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }], convert it to a set and then back to an array.Ensure duplicates are removed in the process.

// Step 1: Create an array of objects
let arr = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }];

// Step 2: Convert the array to a Set (with stringification to ensure uniqueness)
let uniqueSet = new Set(arr.map(obj => JSON.stringify(obj)));

// Step 3: Convert the Set back to an array of objects
let uniqueArray = Array.from(uniqueSet).map(obj => JSON.parse(obj));

// Step 4: Output the result
console.log(uniqueArray);
