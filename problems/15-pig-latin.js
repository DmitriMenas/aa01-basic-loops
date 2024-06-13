/*
Pig Latin is a fun take on the English language where you move any consonant
cluster from the start of the word to the end of the word; when words begin on a
vowel, you simply add "-yay".

Vowels are the letters "a", "e", "i", "o", "u".

Write a function pigLatinWord that takes in a word string and translates the
word into Pig Latin. For this problem use the String's slice() method. The
slice() method extracts a section of a string and returns it as a string.
Hint: Remember the String.includes method!

So the two rules for our version of Pig Latin are:
1. For words that staort with a vowel, add 'yay' to the end of the word.
2. For words that start with a non-vowel, move all letters that come **before
   the first vowel** to the **end of the word** then add 'ay'
*/

function pigLatinWord(word) {
    let vowel = 'aeiou';
    let vEnd = "yay";
    let cEnd ='ay'
    let short = ''
    let latin = []
    for(let i = 0; i < word.length; i++){
        if(vowel.includes(word[0])){
            return `${word}${vEnd}`;
        } else if (!(vowel.includes(word[0]) || vowel.includes(word[1]))){
            latin = word.slice(0,2);
            short = word.slice(2, word.legth);
            return `${short}${latin}${cEnd}`
        } else if (!(vowel.includes(word[0]))){
            latin = word.slice(0,1);
            short = word.slice(1, word.length)
            return `${short}${latin}${cEnd}`
        }
    } 

};

// console.log(pigLatinWord("apple")); //=> "appleyay"
// console.log(pigLatinWord("eat")); //=> "eatyay"
// console.log(pigLatinWord("banana")); //=> "ananabay"
// console.log(pigLatinWord("trash")); //=> "ashtray"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pigLatinWord;
