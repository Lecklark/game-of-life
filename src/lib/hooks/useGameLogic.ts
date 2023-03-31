import { useCallback, useRef, useState } from 'react';
import { INITIAL_SPEED, SPEED_STEP } from '@lib/constants';
import { createInitialTable, createNewGeneration, createRandomTable } from '@lib/helpers';

export type GameParams = {
  speed: number;
};

export enum GAME_STATUSES {
  INIT = 'init',
  PAINTED = 'painted',
  STARTED = 'started',
  PAUSED = 'paused',
  CLEARED = 'cleared',
  RANDOMIZED = 'randomized',
}

export type GameStatuses = keyof Record<GAME_STATUSES, string>;

const initialParams: GameParams = {
  speed: INITIAL_SPEED,
};

export const useGameLogic = (cols: number, rows: number) => {
  const [tableState, setTableState] = useState(createInitialTable(cols, rows));
  const [gameStatus, setGameStatus] = useState<GameStatuses>(GAME_STATUSES.INIT);
  const intervalID = useRef<ReturnType<typeof setInterval> | null>(null);
  const [params, setParams] = useState<GameParams>(initialParams);

  const onCellChange = useCallback(
    (row: number, col: number) => {
      if (gameStatus === GAME_STATUSES.STARTED) {
        return;
      }
      let newTable = [...tableState];
      newTable[row][col] = !newTable[row][col];
      setTableState(newTable);
      setGameStatus(GAME_STATUSES.PAINTED);
    },
    [gameStatus]
  );

  const clearIntervalID = () => {
    if (intervalID.current) {
      clearInterval(intervalID.current);
    }
  };

  const play = () => {
    setTableState((prevState) => createNewGeneration(prevState));
  };

  const startGame = useCallback(() => {
    if (gameStatus === GAME_STATUSES.STARTED) {
      return;
    }
    clearIntervalID();
    setGameStatus(GAME_STATUSES.STARTED);
    intervalID.current = setInterval(play, params.speed);
  }, [params.speed, gameStatus]);

  const pauseGame = useCallback(() => {
    if (gameStatus === GAME_STATUSES.PAUSED) {
      return;
    }
    setGameStatus(GAME_STATUSES.PAUSED);
    clearIntervalID();
  }, [gameStatus]);

  const stopGame = useCallback(() => {
    if (gameStatus === GAME_STATUSES.CLEARED) {
      return;
    }
    clearIntervalID();
    setGameStatus(GAME_STATUSES.CLEARED);
    setTableState(createInitialTable(cols, rows));
  }, [gameStatus]);

  const randomiseTable = useCallback(() => {
    setGameStatus(GAME_STATUSES.RANDOMIZED);
    clearIntervalID();
    const table = createRandomTable(cols, rows);
    setTableState(table);
  }, [gameStatus]);

  const speedUp = useCallback(() => {
    setParams((prev) => ({ ...prev, speed: prev.speed - SPEED_STEP }));
    startGame();
  }, [startGame]);

  const slowDown = useCallback(() => {
    setParams((prev) => ({ ...prev, speed: prev.speed + SPEED_STEP }));
    startGame();
  }, [startGame]);

  return {
    tableState,
    onCellChange,
    startGame,
    pauseGame,
    stopGame,
    randomiseTable,
    speedUp,
    slowDown,
  };
};
