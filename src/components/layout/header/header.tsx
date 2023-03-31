import { FC } from 'react';
import classNames from 'classnames';

import logo from '@assets/images/logo.png';

import styles from './styles.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.header__wrapper)}>
        <div className={styles.header__logo}>
          <img src={logo} alt="Project's logo" />
        </div>
        <div className={styles.header__title}>Conway&apos;s game of life</div>
      </div>
    </header>
  );
};
