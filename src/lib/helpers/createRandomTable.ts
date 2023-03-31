import { createInitialTable } from './createInitialTable';

export const createRandomTable = (cols: number, rows: number) => {
  let newTable = createInitialTable(cols, rows);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      newTable[i][j] = Math.random() < 0.5;
    }
  }
  return newTable;
};
