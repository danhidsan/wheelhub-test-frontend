import React, { createContext, FC, ReactNode, useState, useContext, useCallback } from 'react';

export type Step = {
  stepNumber: number;
  finished?: boolean;
  valid?: boolean;
};

export type StepProviderProps = {
  defaultStep: Step;
  defaultSteps: Step[];
  children: ReactNode;
};

export type StepContextType = {
  currentStep: Step;
  steps: Step[];
  nextStep: () => void;
  back: () => void;
  reset: () => void;
  validate: (valid: boolean) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepContextProvider: FC<StepProviderProps> = ({ defaultStep, defaultSteps, children }) => {
  const [currentStep, setCurrentStep] = useState(defaultStep);
  const [steps, setSteps] = useState(defaultSteps);
  
  const nextStep = useCallback(() => {
    const currentStepIndex = steps.findIndex((step) => step.stepNumber === currentStep.stepNumber);
    
    const stepsCopy = [...steps];
    stepsCopy[currentStepIndex].finished = true;
    
    setSteps(stepsCopy);
    setCurrentStep(stepsCopy[currentStepIndex + 1]);
  }, [currentStep, steps]);

  const back = useCallback(() => {
    const currentStepIndex = steps.findIndex((step) => step.stepNumber === currentStep.stepNumber);
    setCurrentStep(steps[currentStepIndex - 1]);
  }, [currentStep.stepNumber, steps]);

  const reset = useCallback(() => {
    setCurrentStep(defaultStep);
    const stepsCopy = steps.map((step) => ({...step, finished: false, valid: false}));
    setSteps(stepsCopy);
  }, [defaultStep, steps]);

  const validate = useCallback((valid: boolean) => {
    const stepToUpdateIndex = steps.findIndex((step) => step.stepNumber === currentStep.stepNumber);
    const stepsCopy = [...steps];
    stepsCopy[stepToUpdateIndex].valid = valid;
    
    setSteps(stepsCopy);
    setCurrentStep(stepsCopy[stepToUpdateIndex]);
  }, [currentStep, steps]);
  
  return (
    <StepContext.Provider value={{ currentStep, steps, nextStep, back, reset, validate }}>
      {children}
    </StepContext.Provider>
  );
};

export const useSteps = () => {
  const context = useContext(StepContext);
  if (!context) throw Error('useSteps must be used within StepContextProvider');
  return context;
};

