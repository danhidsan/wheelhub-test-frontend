import React, { FC } from 'react';

import { useSteps } from 'src/context/StepContext';

import Steps from './Steps';
import './Header.styles.scss';

const Header: FC = () => {
  const { steps } = useSteps();
  return (
    <div className="app-header">
      <Steps steps={steps} currentStep={1} />
    </div>
  );
};

export default Header;