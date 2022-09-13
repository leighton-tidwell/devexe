import { Box as ThemeUIBox } from 'theme-ui';
import { LogoProps } from './logoTypes';

export function Logo({ sx, variant = 'default' }: LogoProps) {
  const variants = {
    default: {
      src: '/images/logo-full.svg',
      alt: 'Full Devexe logo',
    },
    icon: {
      src: '/images/logo-icon.svg',
      alt: 'Devexe icon',
    },
    'no-icon': {
      src: '/images/logo-no-icon.svg',
      alt: 'Devexe logo text',
    },
  };

  const { src, alt } = variants[variant];

  return (
    <ThemeUIBox
      sx={{
        img: { ...sx },
      }}
    >
      <img src={src} alt={alt} />
    </ThemeUIBox>
  );
}
