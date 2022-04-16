import React, { FC } from 'react';
import classNames from 'classnames';

import Check from 'src/assets/Icons/Check';

import { Props } from './Steps.types';
import './Steps.styles.scss';

const Steps: FC<Props> = ({ steps, currentStep }) => {
  console.log(steps);
  return (
    <div className="app-steps">
      {steps.map(({ stepNumber, finished }, index) => {
        const stepClassNames = classNames('step', {
          'step--active': currentStep === stepNumber,
          'step--finished': finished
        });
        return (
          <>
            <div className={stepClassNames} >
              {finished ? <Check /> : stepNumber}
            </div>
            {index !== steps.length - 1 && <div className="step-separator"/>}
          </>
        );
      })}
    </div>
  );
};

export default Steps;