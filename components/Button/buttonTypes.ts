import { ButtonProps as ThemeUIButtonProps } from 'theme-ui';
import { IconTypes } from '../Icon/iconTypes';

export interface ButtonProps extends ThemeUIButtonProps, IconTypes {
  name: string;
  loading?: boolean;
  variant?: 'primary' | 'cta';
}
