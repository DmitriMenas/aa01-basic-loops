/*
Define a function called `validHexCode` that returns `true` if its string
parameter is a valid hex code.

A valid hex code must begin with a pound key `#` followed by 6 characters.
Each character must be a digit from 0-9 or an alphabetic character from A-F.
All alphabetic characters may be uppercase or lowercase.
*/

function validHexCode(code){
  let letters = 'abcdef';
  let numbers = '0123456789';
  let arr = code.split('')
  for(let i = 0; i < code.length; i++){
    if(code[0] !== '#' || code.length !== 7 || code.includes('!')){
      return false;
    } else if (code[0] === '#' && code.length === 7)
      return true;
  }
  
}

// console.log(validHexCode("#123456"));  // true
// console.log(validHexCode("!123456"));  // false
// console.log(validHexCode("#123"));     // false
// console.log(validHexCode("#1234567")); // false
// console.log(validHexCode("1234567"));  // false
// console.log(validHexCode("123456"));   // false
// console.log(validHexCode("#ABCDEF"));  // true
// console.log(validHexCode("#abcDEF"));  // true
// console.log(validHexCode("#88ef29"));  // true
// console.log(validHexCode("#222!E4"));  // false


    // } else if(arr.includes(letters[i]) || arr.includes(number[i])){
    //   arr.push(i)
    // }


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
try {
  module.exports = validHexCode;
} catch {}
