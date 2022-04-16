import React, { createContext, FC, ReactNode, useState, useContext, useCallback } from 'react';

export type Step = {
  stepNumber: number;
  finished?: boolean;
};

export type StepProviderProps = {
  defaultStep: number;
  defaultSteps: Step[];
  children: ReactNode;
};

export type StepContextType = {
  currentStep: number;
  steps: Step[];
  nextStep: () => void;
  back: () => void;
  reset: () => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepContextProvider: FC<StepProviderProps> = ({ defaultStep, defaultSteps, children }) => {
  const [currentStep, setCurrentStep] = useState(defaultStep);
  const [steps, setSteps] = useState(defaultSteps);
  
  const nextStep = useCallback(() => {
    const stepToUpdateIndex = steps.findIndex((step) => step.stepNumber === currentStep);
    
    const stepsCopy = steps;
    stepsCopy[stepToUpdateIndex].finished = true;
    
    setSteps(stepsCopy);
    setCurrentStep(currentStep + 1);
  }, [currentStep, steps]);

  const back = useCallback(() => {
    setCurrentStep((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCurrentStep(defaultStep);
    const stepsCopy = steps.map((step) => ({...step, finished: false}));
    setSteps(stepsCopy);
  }, [defaultStep, steps]);
  
  return (
    <StepContext.Provider value={{ currentStep, steps, nextStep, back, reset }}>
      {children}
    </StepContext.Provider>
  );
};

export const useSteps = () => {
  const context = useContext(StepContext);
  if (!context) throw Error('useSteps must be used within StepContextProvider');
  return context;
};

