

//1. Start with the number 42 and set that equal to `majorKey`
var majorKey = 42;
//2. Create condition logic to check if the `majorKey` is great or equal to 53
if(majorKey >= 53) {
  majorKey+= 42;
} else {
  majorKey-= 13;
}
//2-1. If true, add 42 to `majorKey`

//2-2. If false, subtract 13 from `majorKey`

//3. Add a the string witha  value of 11 to `majorKey`
majorKey = majorKey + "11";
//4. Create an array, loop through `majorKey` using `charAt`, set array[i] to each value
var array = [];
for(var i = 0;i < majorKey.length; i++) {
  array.push(majorKey.charAt(i));

}
console.log(majorKey);
console.log(array);
//5. Remove the first and last values from the array
array.shift();
array.pop();

//6. Create a new variable. Loop **backwards** through the array and store each value into the new variable, combining each of the values of that array
var scott = 0;
 var scotty = function() {
   for (i = array.length -1 ; i >= 0; i--){
    scott += array[i];
  }
  return scott;
}
//7. `parseInt` both the `majorKey` and the new variable created in Step 6, ensure that both `majorKey` and the new variable are set to these new parsed values.
 scott = parseInt(scott);
 majorKey = parseInt(majorKey);

//8. Add `majorKey` and the new variable created in Step 6 together and store them in `majorKey`
majorKey += scott;
//9. If the new value of `majorKey` is less than 60, set `majorKey` equal to 14. If not, check to see if it is equal to 2930, if it is, set `majorKey` equal to 27.
//If neither of these are true, set `majorKey` to 2.
 if (majorKey < 60){
   majorKey = 14;
 } else if (majorKey = 2930){
   majorKey = 27;
 } else {
   majorKey = 2;
 }
//10. Create a while loop that counts down from 10 and increments `majorKey` by 1.
 var j = 10;
 while (j>0){
   majorKey++;
   j--;
 }
//11. Create a function that accepts an argument `val`. The function should convert `val` to a string, then drop the first character off the string, but only if there
//is more than one character in the string. Return `val` and set the `majorKey` to the returned value.
var val = 0;
 function charlie(val){
   val = val.toString();
   if (val.length>1){
     val = val.substring(1);
   }
  return val;
 }
//12. Call the function.
majorKey = charlie(majorKey);
//13. Console log `majorKey`. Create an index.html file, link in this Javascript file. Load in the browser, check the value.
console.log(majorKey);
//14. Your answer should be a string value that equals 7. Is that what you got?
