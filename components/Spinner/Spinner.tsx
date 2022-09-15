import { Box } from 'theme-ui';
import { useTheme } from '../../hooks/useThemeUI';
import { SpinnerProps } from './spinnerTypes';

export const Spinner = ({
  size = 'small',
  color = 'primary'
}: SpinnerProps) => {
  const { theme } = useTheme();

  const sizes = {
    small: 18,
    medium: 24,
    large: 36
  };

  const colors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    text: theme.colors.text.primary
  };

  const spinnerSize = sizes[size];
  const spinnerColor = colors[color];
  const innerCircleOffset = spinnerSize / 6.22; // arbitrary number from css loader website

  return (
    <Box
      role="alert"
      aria-label="Loading"
      sx={{
        width: `${spinnerSize}px`,
        height: `${spinnerSize}px`,
        borderRadius: '50%',
        background: `conic-gradient(#0000 10%,${spinnerColor})`,
        WebkitMask: `radial-gradient(farthest-side,#0000 calc(100% - ${innerCircleOffset}px),#000 0)`,
        animation: 'spinner 1s infinite linear',
        '@keyframes spinner': {
          to: {
            transform: 'rotate(1turn)'
          }
        }
      }}
    />
  );
};
