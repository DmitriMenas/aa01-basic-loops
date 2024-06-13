/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

function firstHalf(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++){
    if (str.length % 2 === 0){
      newStr = str.slice(0, str.length / 2)
    } else {
      newStr = str.slice(0, str.length / 2 + 1)
    }
  }
  return newStr;
}

// console.log(firstHalf('academy')); // 'acad'
// console.log(firstHalf('planet'));  // 'pla'
// console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
