import { FC } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.footer__wrapper)}>
        Made by{' '}
        <a href='https://github.com/Lecklark' target='_blank' rel='noreferrer'>
          {' '}
          @Lecklark
        </a>
      </div>
    </footer>
  );
};
