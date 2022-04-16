export type Props = {
  label: string;
  variant: ButtonVariant;
  icon?: ButtonIcon;
  onClick?: () => void;
}

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonIcon = 'chevron-right';