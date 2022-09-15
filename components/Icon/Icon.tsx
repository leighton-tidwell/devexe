import { Box } from 'theme-ui';
import { IconContainerProps } from './iconTypes';
import { ChevronDownSVG, DiscordSVG } from './svgs';

export const Icon = ({
  color = 'white',
  icon = 'discord',
  size = 'sm'
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

  return (
    <Box
      sx={{
        height: sizes[size],
        width: sizes[size]
      }}
    >
      {icons[icon]}
    </Box>
  );
};
