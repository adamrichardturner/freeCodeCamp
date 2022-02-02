function findLongestWordLength(str) {
    let arr = str.split(" ")
    let lens = []
    arr.forEach(word => lens.push(word.length))
    return Math.max.apply(Math, lens);
  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");