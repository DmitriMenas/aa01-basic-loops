/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

function elementsOfOddIndicesReversed(str) {
  let arr = []
  for(let i = str.length - 1; i >= 0; i--){
    if (i % 2 !== 0){
      arr.push(str[i]);
    }
  }
  return arr.join('');
}

// console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
// console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
// console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
