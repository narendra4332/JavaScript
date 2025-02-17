// palandrom 
function Palandrom(str) {
    return str === str.split("").reverse().join("")
}
console.log(Palandrom("madam"));