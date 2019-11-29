/**
  Zero Matrix: Write an algorithm such that if an element 
  in an MxN matrix is 0, its entire row and column are set to 0
*/

function zeroMatrix(array) {
    console.log(array);
    let zeroPosition = [];
  
    let makeRCZero = function(r, c, array) {
      for (let column = 0; column < array.length; column++) {
        array[r][column] = 0;
      }
  
      for (let row = 0; row < array.length; row++) {
        array[row][c] = 0;
      }
  
      return array;
    };
  
    for (let i = 0; i < array; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i][j] === 0) {
          zeroPosition.push({ row: i, column: j });
        }
      }
    }
  }
  
  let matrix = [
    [1, 2, 3, 4, 0],
    [1, 0, 3, 4, 5],
    [1, 0, 3, 0, 5],
    [1, 5, 3, 4, 5],
    [1, 2, 3, 4, 5]
  ];
  
  console.log(zeroMatrix(matrix));
  
  /**
  let result = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 5, 3, 0, 0],
    [1, 2, 3, 0, 0]
  ];
   */
  