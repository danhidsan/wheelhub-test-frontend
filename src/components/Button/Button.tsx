import React, { FC } from 'react';
import { BounceLoader } from 'react-spinners';

import Chevron from 'src/assets/Icons/Chevron';

import { Props } from './Button.types';
import './Button.styles.scss';

const Button: FC<Props> = ({
  label,
  icon,
  variant,
  disabled,
  isLoading, 
  onClick 
}) => (
  <button
    type="submit"
    className={`button button--${disabled ? 'disabled' : variant}`} 
    onClick={onClick}
    disabled={disabled}
  >
    {label}
    {icon === 'chevron-right' && <Chevron />}
    {isLoading && <BounceLoader size={15} color="white" />}
  </button>
);

export default Button;