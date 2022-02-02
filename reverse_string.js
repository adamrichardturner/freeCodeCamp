function reverseString(str) {
    /*
    Reverse the provided string.

    You may need to turn the string into an array before you can reverse it.

    Your result must be a string.
    */
    let arr = [];
    for(let i=0; i <= str.length; i++) {
        arr.unshift(str[i])
    }
    return arr.join("")
  }

console.log(reverseString("hello"));