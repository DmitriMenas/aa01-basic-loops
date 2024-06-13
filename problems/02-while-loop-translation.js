/*
The following function is named `eCounter(word)`. The function takes in a string
word and returns the number of e's in the word. The function counts both
lowercase (e) and uppercase (E). Your job is to translate the following function
to use a `while` loop instead of a `for` loop!
*/

function eCounter(word) {
  let count = 0;
  let i = 0;
  while(i < word.length){
    if (word[i] === "e" || word[i] === "E") {
      count += 1;
    }
    i++
  }
  return count;
};


// console.log(eCounter("apple"));      // => 1
// console.log(eCounter("appleapple")); // => 2
// console.log(eCounter("Appleee"));    // => 3


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = eCounter;

