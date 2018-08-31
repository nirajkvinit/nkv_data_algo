// Method 1
function palindrome(str) {
    return str
        .split('')
        .reverse()
        .join('') === str;
}

//Method 2 
function palindrome(str) {
    return str.split('').every((char, index) => {
        return char === str[str.legth - i - 1];
    });
}