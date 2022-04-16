export type Props = {
  label: string;
  variant: ButtonVariant;
  icon?: ButtonIcon;
  onClick?: () => void;
}

export type ButtonVariant = 'primary' | 'disabled' | 'secondary';

export type ButtonIcon = 'chevron-right';