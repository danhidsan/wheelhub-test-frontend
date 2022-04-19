import React, { useMemo, useCallback, useRef } from 'react';

import Footer from '../Footer';
import { useSteps } from 'src/context/StepContext'; 

import Instructions from './Instructions';
import Form from './Form';
import Success from './Success';
import './Content.styles.scss';

const Content = () => {
  const { currentStep, nextStep, back, reset } = useSteps();
  const isLastStep = useMemo(
    () => currentStep.stepNumber === 3, 
    [currentStep]
  );
  const isSecondStep = useMemo(
    () => currentStep.stepNumber === 2, 
    [currentStep]
  );
  const isFirstStep = useMemo(
    () => currentStep.stepNumber === 1, 
    [currentStep]
  );

  return (
    <div className="content">
      <div className="main">
        <div className="step-main">
          {!isLastStep && <div className="title">Test Frontend Wheel Hub</div>}
          {isFirstStep && <Instructions />}
          {isSecondStep && <Form />}
          {isLastStep && <Success />}
        </div>
      </div>
    </div>
  );
};

export default Content;