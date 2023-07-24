// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Here is the first solution that comes to mind.
// function maxChar(str) {
//   // Split string into an array
//   let strArr = str.toLowerCase().split("");
//   // Convert array into a set to filter out only unique values
//   let strSet = new Set(strArr);
//   // Check how many times each unique char appears in string arr
//   let mostRepeatedChar;
//   let prevCharRepetition = 0;

//   strSet.forEach((uniqueChar) => {
//     let charRepetition = 0;
//     strArr.forEach((char) => {
//       if (char === uniqueChar) {
//         charRepetition++;
//       }
//     });

//     // Keep track of most repeated character
//     if (charRepetition > prevCharRepetition) {
//       prevCharRepetition = charRepetition;
//       mostRepeatedChar = uniqueChar;
//     }
//   });

//   return mostRepeatedChar;
// }

// Better solution using object to store characters and repeated values
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    char = char.toLowerCase();
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);

    // Update maximum char
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
