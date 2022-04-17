import React, { FC } from 'react';

import { Props } from './Checkbox.types';
import './Checkbox.styles.scss';

const Checkbox: FC<Props> = ({ label, checked, onClick }) => {
  return (
    <div className="checkbox">
      <input 
        className="checkbox-input" 
        type="checkbox" 
        onChange={onClick}
        checked={checked}
      />
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;