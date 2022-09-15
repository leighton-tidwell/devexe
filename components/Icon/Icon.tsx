import { Box } from 'theme-ui';
import { IconContainerProps } from './iconTypes';
import { DiscordSVG } from './svgs/Discord';

export const Icon = ({
  color = 'white',
  icon = 'discord',
  size = 'sm'
}: IconContainerProps) => {
  const icons = {
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
