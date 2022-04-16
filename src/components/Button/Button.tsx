import React, { FC } from 'react';

import { Chevron } from 'src/assets/Icons';

import { Props } from './Button.types';
import './Button.styles.scss';

const Button: FC<Props> = ({ label, icon, variant, onClick }) => (
  <button className={`button button--${variant}`} onClick={onClick}>
    {label}
    {icon === 'chevron-right' && <Chevron />}
  </button>
);

export default Button;