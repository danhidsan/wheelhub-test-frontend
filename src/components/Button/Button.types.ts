export type Props = {
  label: string;
  variant: ButtonVariant;
  icon?: ButtonIcon;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export type ButtonVariant = 'primary' | 'disabled' | 'secondary';

export type ButtonIcon = 'chevron-right';