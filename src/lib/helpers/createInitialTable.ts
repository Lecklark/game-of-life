export const createInitialTable = (cols: number, rows: number): boolean[][] => {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false));
};
