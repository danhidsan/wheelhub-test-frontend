import React, { FC } from 'react';

import { Props } from './Steps.types';
import './Steps.styles.scss';

const Steps: FC<Props> = ({ steps, currentStep }) => (
  <div className="app-steps">
    {steps.map(({ stepNumber }, index) => (
      <>
        <div className={`step ${currentStep === stepNumber ? 'step--active' : ''}`} >
          {stepNumber}
        </div>
        {index !== steps.length - 1 && <div className="step-separator"/>}
      </>
    ))}
  </div>
);

export default Steps;