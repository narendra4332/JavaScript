function containsSubstring(str, subStr) {
    if (str.includes(subStr)) {
        return true
    }
    else {
        return false
    }
}
console.log(containsSubstring("hello world", "hello"));