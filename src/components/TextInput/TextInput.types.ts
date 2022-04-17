import { ChangeEvent } from 'react';

export type Props = {
  name: string;
  value?: string;
  strength?: 'strong' | 'medium' | 'weak';
  placeholder?: string;
  isPassword?: boolean;
  className?: string;
  label?: string;
  tooltipText?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};