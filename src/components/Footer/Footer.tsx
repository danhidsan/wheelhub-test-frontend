import React, { FC } from 'react';

import Button from '../Button';

import { Props } from './Footer.types';
import './Footer.styles.scss';

const Footer: FC<Props> = ({ 
  isLastStep, 
  isFirstStep, 
  isStepValid,
  isLoading,
  onClickFirstButton, 
  onClickSecondButton 
}) => (
  <div className="footer">
    {!isFirstStep ? (
      <Button label="Atrás" variant="secondary" onClick={onClickFirstButton} />
    ) : <div />}
    <Button 
      label={isLastStep ? 'Volver al inicio' : 'Siguiente'} 
      variant={isLastStep ? 'secondary' : 'primary'} 
      icon={!isLastStep ? 'chevron-right' : undefined} 
      onClick={onClickSecondButton}
      disabled={!isStepValid || isLoading}
      isLoading={isLoading}
    />
  </div>
);

export default Footer;