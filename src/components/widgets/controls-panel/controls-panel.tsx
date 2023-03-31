import { FC, memo } from 'react';

import styles from './styles.module.scss';

import { ControlsPanelProps } from './types';

export const ControlsPanel: FC<ControlsPanelProps> = memo(
  ({ onRandomClick, onPauseClick, onPlayClick, onSpeedUpClick, onSlowDownClick, onClearClick }) => {
    return (
      <div className={styles.buttons}>
        <button className={styles.buttons__btn} onClick={onRandomClick}>
          Randomize
        </button>
        <button className={styles.buttons__btn} onClick={onPlayClick}>
          Play
        </button>
        <button className={styles.buttons__btn} onClick={onPauseClick}>
          Pause
        </button>
        <button className={styles.buttons__btn} onClick={onSpeedUpClick}>
          Speed Up
        </button>
        <button className={styles.buttons__btn} onClick={onSlowDownClick}>
          Slow Down
        </button>
        <button className={styles.buttons__btn} onClick={onClearClick}>
          Clear
        </button>
      </div>
    );
  }
);
