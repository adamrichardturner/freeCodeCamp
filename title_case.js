function titleCase(str) {
    /*
    Return the provided string with the first letter of each word capitalized. 
    Make sure the rest of the word is in lower case.
    For the purpose of this exercise, you should also capitalize connecting 
    words like 'the' and 'of'.
    */
   let words = str.split(" ")
   let sent = ""
   for(let i=0; i < words.length; i++) {
       sent += words[i][0].toUpperCase() + words[i].substring(1).toLowerCase() + " ";
   }
   return sent.substring(0, sent.length - 1);
}
  
console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout