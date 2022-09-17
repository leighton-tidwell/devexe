import Image from 'next/image';
import { Box } from 'theme-ui';
import { AvatarProps } from './avatarTypes';

export const Avatar = ({ src = '', alt, size = 'sm' }: AvatarProps) => {
  const sizes = {
    sm: '32px',
    md: '48px',
    lg: '64px'
  };

  return (
    <Box
      sx={{
        height: sizes[size],
        width: sizes[size],
        background: 'background.tertiary',
        color: 'text.primary',
        display: 'grid',
        placeContent: 'center',
        borderRadius: 9999,
        overflow: 'hidden'
      }}
      aria-label={src ? '' : alt}
    >
      {src ? (
        <Image
          height={sizes[size]}
          width={sizes[size]}
          alt={alt}
          src={src}
          layout="intrinsic"
        />
      ) : (
        '?'
      )}
    </Box>
  );
};
