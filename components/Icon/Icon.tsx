import { Box, Theme } from 'theme-ui';
import { IconContainerProps } from './iconTypes';
import { ChevronDownSVG, DiscordSVG } from './svgs';

export const Icon = ({
  color = 'white',
  icon = 'discord',
  size = 'sm',
  fontSizeHeights
}: IconContainerProps) => {
  const icons = {
    'chevron-down': <ChevronDownSVG color={color} />,
    discord: <DiscordSVG color={color} />
  };

  const sizes = {
    sm: '18px',
    md: '24px',
    lg: '36px',
    xl: '48px'
  };

  const responsiveFontSizes = (theme: Theme) => [
    theme?.fontSizes?.[0],
    theme?.fontSizes?.[2],
    theme?.fontSizes?.[3]
  ];

  return (
    <Box
      sx={{
        height: fontSizeHeights ? responsiveFontSizes : sizes[size],
        width: fontSizeHeights ? responsiveFontSizes : sizes[size]
      }}
    >
      {icons[icon]}
    </Box>
  );
};
