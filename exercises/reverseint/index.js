// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Reverse string array and return number
function backToNum(strArr) {
   //Reverse char array
  let reverseStrArr = [];
  strArr.forEach(char => reverseStrArr.unshift(char));

  //Convert char array to number
  return parseInt(reverseStrArr.join(""));
}

function reverseInt(n) {
  // Convert num to string array
  let strNum = n.toString().split("");

  //Handle negative values
  if (strNum.includes("-")) {
    strNum.shift("-");
    return backToNum(strNum) * -1;
  } else {
    return backToNum(strNum);
  }
}

module.exports = reverseInt;
