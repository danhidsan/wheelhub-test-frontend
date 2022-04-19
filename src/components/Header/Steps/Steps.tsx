import React, { FC, Fragment } from 'react';
import classNames from 'classnames';

import Check from 'src/assets/Icons/Check';

import { Props } from './Steps.types';
import './Steps.styles.scss';

const Steps: FC<Props> = ({ steps, currentStepNumber }) => {
  return (
    <div className="app-steps">
      {steps.map(({ stepNumber, finished }, index) => {
        const stepClassNames = classNames('step', {
          'step--active': currentStepNumber === stepNumber,
          'step--finished': finished
        });
        return (
          <Fragment key={stepNumber}>
            <div className={stepClassNames} >
              {finished ? <Check /> : stepNumber}
            </div>
            {index !== steps.length - 1 && <div className="step-separator"/>}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Steps;