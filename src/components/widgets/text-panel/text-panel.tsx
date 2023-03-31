import { FC } from 'react';

import styles from './styles.module.scss';

export const TextPanel: FC = () => {
  return (
    <div className={styles.text}>
      <h1>Rules of life: </h1>
      <ol>
        <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
        <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
        <li>
          Any dead cell with exactly three live neighbours becomes a live cell, as if by
          reproduction.
        </li>
      </ol>
      <h1>How to play:</h1>
      <ul>
        <li>Use your mouse to draw the initial configuration of the life form</li>
        <li>
          You can also randomize the initial configuration by clicking &quot;Randomize&quot; button
        </li>
        <li>To start life, click on &quot;Play&quot; button</li>
        <li>
          You can control the evolution speed by pressing the &quot;Speed Up&quot; and &quot;Speed
          Down&quot; buttons
        </li>
        <li>
          You can always try to start a new life by clearing the playing field by pressing the
          &quot;Clear&quot; button
        </li>
      </ul>
    </div>
  );
};
