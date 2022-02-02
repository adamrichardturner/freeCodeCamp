function truncateString(str, num) {
    /*
    Truncate a string (first argument) if it is longer than the given maximum 
    string length (second argument). Return the truncated string with a ... ending.
    */
   let truncated = str.substring(0, num)
   if(str.length > num) {
       return truncated + '...'
   } else {
       return str
   }
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));