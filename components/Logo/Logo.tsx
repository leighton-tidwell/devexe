import Image from 'next/image';
import { Box } from 'theme-ui';
import { LogoProps } from './logoTypes';

export const Logo = ({ variant = 'default' }: LogoProps) => {
  const variants = {
    default: {
      src: '/images/logo-full.svg',
      alt: 'Full Devexe logo'
    },
    icon: {
      src: '/images/logo-icon.svg',
      alt: 'Devexe icon'
    },
    'no-icon': {
      src: '/images/logo-no-icon.svg',
      alt: 'Devexe logo text'
    }
  };

  const { src, alt } = variants[variant];

  return (
    <Box
      sx={{
        position: 'relative',
        height: '70px',
        width: [200, 250, 275, 300, 350]
      }}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </Box>
  );
};
