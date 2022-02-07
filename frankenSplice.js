function frankenSplice(arr1, arr2, n) {
    /*
    You are given two arrays and an index.
    Copy each element of the first array into the second array, in order.
    Begin inserting elements at index n of the second array.

    Return the resulting array. The input arrays should remain the same after the function runs.
    */
   let arr3 = arr2.slice();
   for(let i=0; i < arr1.length; i++) {
       arr3.splice(n + i, 0, arr1[i]);
   }
   return arr3;
}
  
console.log(frankenSplice([1, 2], ["a", "b"], 1)) // ["a", 1, 2, "b"]