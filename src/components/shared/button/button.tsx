import { FC } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={classNames(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};
