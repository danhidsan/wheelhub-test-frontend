import React, { createContext, FC, ReactNode, useState, useContext } from 'react';

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
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepContextProvider: FC<StepProviderProps> = ({ defaultStep, defaultSteps, children }) => {
  const [currentStep, setCurrentStep] = useState(defaultStep);
  const [steps, setSteps] = useState(defaultSteps);
  return (
    <StepContext.Provider value={{ currentStep, steps: defaultSteps }}>
      {children}
    </StepContext.Provider>
  );
};

export const useSteps = () => {
  const context = useContext(StepContext);
  if (!context) throw Error('useSteps must be used within StepContextProvider');
  return context;
};

