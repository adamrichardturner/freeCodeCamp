function repeatStringNumTimes(str, num) {
    /*
    Repeat a given string str (first argument) for num times (second argument). 
    Return an empty string if num is not a positive number. For the purpose of 
    this challenge, do not use the built-in .repeat() method.
    */
   if(num <= 0) {
       return ''
   } else {
    let repeat = ''
    while(num !== 0) {
        repeat += str
        num--
    }
    return repeat;
   }
   
}
  
console.log(repeatStringNumTimes("abc", -1));