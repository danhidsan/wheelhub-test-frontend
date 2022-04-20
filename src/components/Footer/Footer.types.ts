export type Props = {
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isStepValid?: boolean;
  isLoading?: boolean;
  onClickSecondButton?: () => void;
  onClickFirstButton: () => void;
};