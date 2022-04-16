import React, { FC } from 'react';

import Button from '../Button';

import { Props } from './Footer.types';
import './Footer.styles.scss';

const Footer: FC<Props> = ({ isLastStep, onClickFirstButton, onClickSecondButton }) => (
  <div className="footer">
    <Button label="Atrás" variant="secondary" onClick={onClickFirstButton} />
    <Button 
      label={isLastStep ? 'Volver al inicio' : 'Siguiente'} 
      variant={isLastStep ? 'secondary' : 'primary'} 
      icon={!isLastStep ? 'chevron-right' : undefined} 
      onClick={onClickSecondButton} 
    />
  </div>
);

export default Footer;