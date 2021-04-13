// create constructor function that holds numbers.
// register when all boxes are full of numbers.
// each row contains numbers 1 to 9 with no repeats
// each column contains numbers 1 to 9 with no repeats
// each of the nine 3 * 3 grids contains numbers 1 to 9 with no repeats
import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {

  test('should correctly create a sudoku object', () => {
    const sudoku = new Sudoku(1);
    expect(sudoku.number).toEqual(1);
  });
});