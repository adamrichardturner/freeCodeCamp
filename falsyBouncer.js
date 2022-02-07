function bouncer(arr) {
    /*
    Remove all falsy values from an array.
    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
    Hint: Try converting each value to a Boolean.
    */
   let arr1 = []
   for(let i=0; i < arr.length; i++) {
       if(Boolean(arr[i]) === true) {
           arr1.push(arr[i]);
       }
   }
   return arr1;
}
  
console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]