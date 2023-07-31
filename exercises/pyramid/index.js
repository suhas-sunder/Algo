// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// First solution. I came close on my own, but I was doing (n-i)/2 for the spaces which was wrong. Ended up having to look up similar solutions before realizing what I did wrong and making mine work.
// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     const spaces = " ".repeat(n - i);
//     const hashes = "#".repeat(2 * i - 1);
//     console.log(spaces + hashes + spaces);
//   }
// }

function pyramid(n) {
  const middleIndex = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let rowStrOutput = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      if (middleIndex - row <= column && middleIndex + row >= column) {
        rowStrOutput += "#";
      } else {
        rowStrOutput += " ";
      }
    }

    console.log(rowStrOutput);
  }
}

module.exports = pyramid;
