// countVowels

function countVowels(str) {
    let Vowels = "aeiou"
    let count = 0
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (Vowels.includes(str[i]))
            count++
    }
    return count
}
console.log(countVowels("Narendra"))

// remove space 
let space = "hello world";
let removeSpace = space.replace(/\s+/g, '');
console.log(removeSpace)


// search string 
function containsSubstring(str, present) {
    return str.includes(present)
}
console.log(containsSubstring("hello world", "h"))


