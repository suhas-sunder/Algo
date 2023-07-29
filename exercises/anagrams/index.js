// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Helper function is part of first solution
// function stringToObj(str) {
//   let strObj = {};

//   str
//     .replace(/[^\w]/g, "")
//     .toLowerCase()
//     .split("")
//     .forEach((char) => {
//       if (strObj.hasOwnProperty(char)) {
//         strObj[char] += 1;
//       } else {
//         strObj[char] = 1;
//       }
//     });

//   return strObj;
// }

// First solution
// function anagrams(stringA, stringB) {
//   const strObjA = stringToObj(stringA);
//   const strObjB = stringToObj(stringB);

//   for (let char in strObjA) {
//     if (strObjA[char] !== strObjB[char]) return false;
//   }

//   return Object.keys(strObjA).length === Object.keys(strObjB).length;
// }

function sortStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  return sortStr(stringA) === sortStr(stringB);
}

module.exports = anagrams;
