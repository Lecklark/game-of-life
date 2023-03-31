import { useMemo } from 'react';
import { COLUMNS_NUMBER, ROWS_NUMBER } from '@lib/constants';
import { useGameLogic } from '@lib/hooks';

import { ControlsPanel } from '@components/widgets/controls-panel';
import { MainTable } from '@components/widgets/main-table';

const cols = COLUMNS_NUMBER;
const rows = ROWS_NUMBER;

export const GameBoard = () => {
  const {
    tableState,
    onCellChange,
    stopGame,
    startGame,
    pauseGame,
    randomiseTable,
    speedUp,
    slowDown,
  } = useGameLogic(cols, rows);

  const cellsArray = useMemo(() => {
    let cells = [];
    for (let i = 0; i < tableState.length; i++) {
      for (let j = 0; j < tableState[0].length; j++) {
        cells.push({ col: i, row: j, enabled: tableState[i][j] });
      }
    }
    return cells;
  }, [tableState]);

  return (
    <div>
      <ControlsPanel
        onPauseClick={pauseGame}
        onPlayClick={startGame}
        onRandomClick={randomiseTable}
        onSpeedUpClick={speedUp}
        onSlowDownClick={slowDown}
        onClearClick={stopGame}
      />
      <MainTable tableState={cellsArray} onCellChange={onCellChange} />
    </div>
  );
};
