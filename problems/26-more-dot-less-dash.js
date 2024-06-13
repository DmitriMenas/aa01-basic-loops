/*
Write a function moreDotLessDash that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
more dots (.) than dashes (-).
*/

function moreDotLessDash(str){
    let dotCount = 0;
    let dashCount = 0
    for(let i = 0; i <= str.length -1; i++){
        if(str[i] === '.'){
            dotCount++;
        } else if(str[i] === "-"){
            dashCount++;
        }
    }
    console.log(dotCount);
    console.log(dashCount);
    if(dotCount > dashCount){
        return true;
    } else if (dashCount >= dotCount){
        return false;
    }
}

// console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
// console.log(moreDotLessDash('Morse code is great.'));                   // true
// console.log(moreDotLessDash('.... . -.--'));                            // true
// console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = moreDotLessDash;
