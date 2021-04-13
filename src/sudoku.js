export default function Sudoku(number) {
  // this.number = number;
  this.rows = rows;
  this.columns = columns;
  this.boxes = boxes;
}

// there will be 9 rows
// there will be 9 columns
// there will be 9 squares/boxes

// Sudoku (rows, columns, boxes) 

// new Sudoku = ([1,2,3,4,5,6,7,8,9],[1,2,2,3,4,5,7,8,9],[1,1,1,1,1,1,1,1,1]) 

// One-dimentional array: ["a", "b", "c", etc.One-..]
// Two-dimentional array = [[1, 2, 3], [4, 5, 6], ["a", "b"]] // array[0] <- [1, 2, 3], array[0][1] <- 2
// Sudoku example: [[], [], [], [], [], [], [], [], []] <- array[0] (column), array[i][0] <- row, array[1-3][1-3] <- box

// example input
// [ 
//   [5, 6, "", 8, 4, 7, "", "", ""],
//   [3, "", 9, "", "", "", 6, "", ""],
//   ["", "", 8, "", "", "", "", "", ""],
//   [],
//   [],
//   [],
//   [],
//   [],
//   []
// ]