import { FC, useCallback, useEffect, useState } from 'react';
import { COLUMNS_NUMBER } from '@lib/constants';

import styles from './styles.module.scss';

import { TableCell } from './table-cell';
import { MainTableProps } from './types';

export const MainTable: FC<MainTableProps> = ({ tableState, onCellChange }) => {
  const [isPainting, setIsPainting] = useState<boolean>(false);

  const onCellEnter = useCallback(
    (row: number, col: number) => {
      if (isPainting) {
        onCellChange(row, col);
      }
    },
    [isPainting]
  );

  useEffect(() => {
    const enablePaintingMode = () => {
      setIsPainting(true);
    };

    const disablePaintingMode = () => {
      setIsPainting(false);
    };

    document.addEventListener('mousedown', enablePaintingMode);
    document.addEventListener('mouseup', disablePaintingMode);

    return () => {
      document.removeEventListener('mousedown', enablePaintingMode);
      document.removeEventListener('mouseup', disablePaintingMode);
    };
  }, []);

  return (
    <div className={styles.table} style={{ width: COLUMNS_NUMBER * 16 }}>
      {tableState.map(({ col, row, enabled }) => (
        <TableCell
          col={col}
          row={row}
          key={'cell ' + col + ' ' + row}
          enabled={enabled}
          onClick={onCellChange}
          onMouseEnter={onCellEnter}
        />
      ))}
    </div>
  );
};
