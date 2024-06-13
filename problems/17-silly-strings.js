/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function sillyString(word) {
    let vowel = 'aeiou';
    let arr = word.split("");
    for (let i = 0; i < arr.length; i++) {
        if (vowel.includes(arr[i])) {
            arr.splice(i + 1, 0, 'b', arr[i]);
            i += 2;
        }
    }
    return arr.join("");
}

//console.log(sillyString('stop'));       // stobop
//console.log(sillyString('that'));       // thabat
//console.log(sillyString('can'));        // caban
// console.log(sillyString('cats'));       // cabats
//console.log(sillyString('italy'));      // ibitabaly
// console.log(sillyString('scooter'));    // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
