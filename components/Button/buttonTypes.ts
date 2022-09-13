import { ButtonProps as ThemeUIButtonProps } from 'theme-ui';

export interface ButtonProps extends ThemeUIButtonProps {
  loading?: boolean;
  variant?: 'primary';
}
