export type Props = {
  steps: Step[];
  currentStepNumber: number;
};

export type Step = {
  stepNumber: number;
  finished?: boolean;
}