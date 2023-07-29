// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// First solution
// function capitalize(str) {
//   const wordArr = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i - 1) === " " || i === 0 || i === str.length) {
//       wordArr.push(str.charAt(i).toUpperCase());
//     } else {
//       wordArr.push(str.charAt(i).toLowerCase());
//     }
//   }

//   return wordArr.join("");
// }

// function capitalize(str) {
//   const wordArr = str.toLowerCase().split(" ");

//   wordArr.forEach((word, index) => {
//     wordArr[index] = word[0].toUpperCase() + word.slice(1);
//   });

//   return wordArr.join(" ");
// }

function capitalize(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

module.exports = capitalize;
