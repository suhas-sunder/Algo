// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// First solution that comes to mind
// function chunk(array, size) {
//   const finalArr = [];
//   let subArr = [];

//   array.forEach((element, index) => {
//     subArr.push(element);
//     if ((index + 1) % size === 0) {
//       finalArr.push(subArr);
//       subArr = [];
//     }
//   });

//   // Push any leading values onto final array
//   if (subArr.length !== 0) finalArr.push(subArr);

//   return finalArr;
// }

// Second solution
// function chunk(array, size) {
//   const finalArr = [];

//   for (let element of array) {
//     const last = finalArr[finalArr.length - 1];

//     if (!last || last.length === size) {
//       finalArr.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return finalArr;
// }

function chunk(array, size) {
  const finalArr = [];
  let index = 0;

  while (index < array.length) {
    finalArr.push(array.slice(index, index + size));
    index += size;
  }

  // Push any leading values onto final array

  return finalArr;
}

module.exports = chunk;
