export type Props = {
  label: string;
  variant: ButtonVariant;
  icon?: ButtonIcon;
  disabled?: boolean;
  onClick?: () => void;
}

export type ButtonVariant = 'primary' | 'disabled' | 'secondary';

export type ButtonIcon = 'chevron-right';