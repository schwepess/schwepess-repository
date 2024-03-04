function isPlndrome(array){
   
   const len = arr.length;
   
   for(let i = 0; i < len /2; i ++){
    if (arr[i] !== arr[len - i - 1]) return false;
   }
   return true;
}
console.log(isPlndrome([1,2,3,4,5,6]));

