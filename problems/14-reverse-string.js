/*
Write a function reverseString(str) that takes in a string. The function should
return a new string where the order of the characters is reversed.
*/

function reverseString(str){
    let arr = [];
    let split = str.split('')
    for(let i = 0; i < split.length; i++){
        arr.push(split[i]);
    }
    arr.reverse();
    return arr.join('');
}

console.log(reverseString('fish')); // 'hsif'
// console.log(reverseString('marathon')); // 'nohtaram'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseString;
