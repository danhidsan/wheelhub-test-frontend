import React, { FC } from 'react';

import Chevron from 'src/assets/Icons/Chevron';

import { Props } from './Button.types';
import './Button.styles.scss';

const Button: FC<Props> = ({ label, icon, variant, disabled, onClick }) => (
  <button 
    className={`button button--${disabled ? 'disabled' : variant}`} 
    onClick={onClick}
    disabled={disabled}
  >
    {label}
    {icon === 'chevron-right' && <Chevron />}
  </button>
);

export default Button;