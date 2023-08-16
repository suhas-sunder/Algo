// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const nodeArr = [root, "s"];
  const widthArr = [0];

  while (nodeArr.length > 1) {
    if (nodeArr[0] === "s") {
      nodeArr.push(nodeArr.shift());
      widthArr.push(0);
    } else {
      nodeArr.push(...nodeArr.shift().children);
      widthArr[widthArr.length - 1]++;
    }
  }

  return widthArr;
}

module.exports = levelWidth;
