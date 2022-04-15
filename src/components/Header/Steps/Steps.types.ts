export type Props = {
  steps: Step[];
  currentStep: number;
};

export type Step = {
  stepNumber: number;
  finished?: boolean;
}