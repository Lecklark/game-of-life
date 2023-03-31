import { FC, memo } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import { TableCellProps } from './types';

export const TableCell: FC<TableCellProps> = memo(
  ({ enabled, onClick, onMouseEnter, col, row }) => {
    return (
      <div
        className={classNames(styles.cell, {
          [styles.cell_enabled]: enabled,
        })}
        onClick={() => onClick(col, row)}
        onMouseEnter={() => onMouseEnter(col, row)}
      />
    );
  }
);
