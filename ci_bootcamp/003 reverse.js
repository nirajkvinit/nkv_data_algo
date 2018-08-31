// Method 1
function reverse(str) {
    return str
            .split("")
            .reverse()
            .join("");

}

//Method 2
function reverse(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

// Method 3
function reverse(str) {
    var reversed = "";
    for (var i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

//Method 4
function reverse(str) {
    return str.split('').reduce((reversed, char) => {
        return char + reversed;
    }, "");
}