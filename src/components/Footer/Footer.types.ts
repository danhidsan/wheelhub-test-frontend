export type Props = {
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isStepValid?: boolean;
  onClickSecondButton: () => void;
  onClickFirstButton: () => void;
};