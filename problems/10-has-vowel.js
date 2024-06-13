/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function hasVowel(str){
    let vowel = "aeiou"
    for( let i = 0; i < vowel.length; i++){
        if (str.includes(vowel[i])){
            return true;
        }
    }
    return false;
}

console.log(hasVowel('dog'));          // => true
// console.log(hasVowel('conventional')); // => true
// console.log(hasVowel('rhythm'));       // => false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
