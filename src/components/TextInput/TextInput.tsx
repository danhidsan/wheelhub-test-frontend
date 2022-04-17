import React, { FC, useState, useCallback } from 'react';
import classNames from 'classnames';

import PasswordEye from 'src/assets/Icons/PasswordEye';
import Info from 'src/assets/Icons/Info';

import { Props } from './TextInput.types';
import './TextInput.styles.scss';

const TextInput: FC<Props> = ({ 
  name,
  value,
  isPassword,
  placeholder,
  className,
  strength,
  label,
  tooltipText,
  error,
  limit,
  onChange 
}) => {
  const [showPassword, setShowPassword] = useState(!isPassword);

  const handleShowPassword = useCallback(() => setShowPassword((prev) => !prev), []);

  const mainClassNames = classNames('text-input-container', {
    [`${className}`]: !!className
  }); 

  const inputClass = classNames({
    'password-input': isPassword,
    'input-error': !!error,
  });

  return (
    <div className={mainClassNames}>
      <div className="text-input-content">
        <span className="label-content">
          {label}
          {tooltipText && (
            <div className="info">
              <Info />
            </div>
          )}
        </span>
        <div>
          <input
            name={name}
            value={value}
            placeholder={placeholder}
            type={showPassword ? 'text' : 'password'}
            className={inputClass}
            onChange={onChange}
          />
          {isPassword && (
            <PasswordEye
              size={16}
              variant={showPassword ? 'hide' : 'show'}
              className="eye"
              onClick={handleShowPassword}
            />
          )}
        </div>
        {strength && isPassword && (
          <div className={`password-strength password-strength--${strength}`} />
        )}
        <div className="bottom">
          {error ? <span className="error">{error}</span> : <div />}
          {limit && value && <span>{`${value?.length}/${limit}`}</span>}
        </div>
      </div>
    </div>
  );
};

export default TextInput;