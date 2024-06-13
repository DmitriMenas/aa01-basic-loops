/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

function caesarCipher(string, num) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
        let alphabetIndex = alphabet.indexOf(arr[i]);
        if (alphabetIndex !== -1){
            arr[i] = alphabet[(alphabetIndex + num) % alphabet.length]
        }
    }
    return arr.join('')
}

// console.log(caesarCipher("apple", 1)); // "bqqmf"
// console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
// console.log(caesarCipher("zebra", 4)); // "difve"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
