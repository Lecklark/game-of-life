import { FC } from 'react';

import styles from './styles.module.scss';

import { Footer } from './footer';
import { Header } from './header';
import { FooterProps } from './types';

export const Layout: FC<FooterProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__main}>{children}</main>
      <Footer />
    </div>
  );
};
