import { Button as ThemeUIButton, Text } from 'theme-ui';
import { Icon, Spinner } from '@/components/index';
import { ButtonProps } from './buttonTypes';

export const Button = ({
  children = '',
  disabled = false,
  icon,
  onClick = () => {},
  loading = false,
  variant = 'primary',
  ...props
}: ButtonProps) => (
  <ThemeUIButton
    onClick={onClick}
    disabled={disabled}
    sx={{
      minWidth: 'fit-content',
      maxWidth: '100%',
      fontFamily: 'body',
      color: 'text.primary',
      borderRadius: 'default',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2',
      px: '3',
      py: '2',
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
      '&:active:focus-visible': {
        outlineOffset: '4px'
      },
      '&:focus-visible': {
        outlineColor: 'secondary',
        outlineOffset: '2px',
        outlineStyle: 'solid'
      },
      svg: {
        filter: 'drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25))'
      }
    }}
    aria-busy={loading}
    variant={variant}
    role="button"
    {...props}
  >
    {loading && <Spinner color="text" />}
    {icon && !loading && <Icon icon={icon} />}
    {children && <Text>{children}</Text>}
  </ThemeUIButton>
);
