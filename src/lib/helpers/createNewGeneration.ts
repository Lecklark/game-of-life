export const createNewGeneration = (currentState: boolean[][]) => {
  const g = currentState;
  let g2 = [...currentState];
  const rows = currentState.length;
  const cols = currentState[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let count = 0;
      if (i > 0) if (g[i - 1][j]) count++;
      if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
      if (i > 0 && j < cols - 1) if (g[i - 1][j + 1]) count++;
      if (j < cols - 1) if (g[i][j + 1]) count++;
      if (j > 0) if (g[i][j - 1]) count++;
      if (i < rows - 1) if (g[i + 1][j]) count++;
      if (i < rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
      if (i < rows - 1 && j < cols - 1) if (g[i + 1][j + 1]) count++;
      if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
      if (!g[i][j] && count === 3) g2[i][j] = true;
    }
  }

  return g2;
};
