import React, { FC } from 'react';

import { useSteps } from 'src/context/StepContext';

import Steps from './Steps';
import './Header.styles.scss';

const Header: FC = () => {
  const { steps, currentStep } = useSteps();
  return (
    <div className="app-header">
      <Steps steps={steps} currentStep={currentStep} />
    </div>
  );
};

export default Header;