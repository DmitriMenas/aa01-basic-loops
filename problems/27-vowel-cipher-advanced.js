/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function vowelCipher(str) {
    let vowels = 'aeiou';
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        let vowelIndex = vowels.indexOf(arr[i]);
        if (vowelIndex !== -1) {
            arr[i] = vowels[(vowelIndex + 1) % vowels.length];
        }
    }

    return arr.join('');
}
//console.log(vowelCipher("bootcamp")); // "buutcemp"
// console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
