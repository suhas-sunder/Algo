// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let top = 0;
    let right = n - 1;
    let bottom = n - 1;
    let left = 0;
    // Create an empty array with n sub arrays that are unique. new Array(n).fill([]) doesn't work since all sub arrays have the same pointer.
    let spiralMatrix = new Array(n).fill().map(() => new Array().fill());
    let count = 1;

    while(count <= n * n) {       
        // Sweep left to right on top
        for(let i = left; i <=  right; i++) {
            spiralMatrix[top][i] = count++;
        }
        top++;

        // Sweep top to bottom on right
        for(let i = top; i <= bottom; i++) {
            spiralMatrix[i][right] = count++;
        }
        right--;

        // Sweep right to left on bottom
        for(let i = right; i >=  left; i--) {
            spiralMatrix[bottom][i] = count++;
        }
        bottom--;

        // Sweep bottom to top on left
        for(let i = bottom; i >= top; i--) {
            spiralMatrix[i][left] = count++;
        }
        left++;

    }
    
    return spiralMatrix;
}

module.exports = matrix;
