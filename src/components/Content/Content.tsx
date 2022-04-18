import React, { useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Separator from '../Separator';
import Footer from '../Footer';
import { useSteps } from 'src/context/StepContext'; 

import Instructions from './Instructions';
import Form from './Form';
import Success from './Success';
import './Content.styles.scss';

const Content = () => {
  const { t } = useTranslation();

  const { currentStep, steps, nextStep, back, reset } = useSteps();
  const isLastStep = useMemo(
    () => currentStep.stepNumber === steps[steps.length - 1].stepNumber, 
    [currentStep, steps]
  );
  
  const handleClickSecondButton = useCallback(() => {
    if (isLastStep) reset();
    else nextStep();
  }, [isLastStep, nextStep, reset]);

  const handleClickFirstButton = useCallback(() => {
    back();
  }, [back]);

  return (
    <div className="content">
      <div className="main">
        <div className="step-main">
          {currentStep.stepNumber !== 3 && (
            <div className="title">{t('stepTitle')}</div>
          )}
          {currentStep.stepNumber === 1 && <Instructions />}
          {currentStep.stepNumber === 2 && <Form />}
          {currentStep.stepNumber === 3 && <Success />}
        </div>
        <Separator />
        <Footer 
          onClickSecondButton={handleClickSecondButton} 
          onClickFirstButton={handleClickFirstButton} 
          isLastStep={isLastStep}
          isFirstStep={currentStep.stepNumber === 1}
          isStepValid={currentStep.valid || isLastStep} 
        />
      </div>
    </div>
  );
};

export default Content;