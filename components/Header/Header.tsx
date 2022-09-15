import { Button, Icon, Logo } from '@/components/index';
import { Box, Text } from 'theme-ui';
import { HeaderProps } from './headerTypes';

export const Header = ({ auth }: HeaderProps) => (
  <>
    <Box
      sx={{
        gridColumnStart: [2, 2, 2, 3],
        gridColumnEnd: [8, 7, 6, 6],
        display: 'grid',
        placeContent: 'center',
        py: 4
      }}
    >
      <Logo sx={{ width: '100%' }} />
    </Box>
    {auth ? (
      <Box
        sx={{
          gridColumnStart: [8, 7],
          gridColumnEnd: [12, 12, 12, 11],
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Text
          sx={{ display: ['none', 'none', 'block', 'block'] }}
          color="text.primary"
        >
          Username
        </Text>
        <Box
          sx={{
            background: 'white',
            borderRadius: 9999,
            height: '32px',
            width: '32px'
          }}
        />
        <Box
          sx={{
            cursor: 'pointer'
          }}
          role="button"
          aria-label="Profile options"
        >
          <Icon icon="chevron-down" size="md" />
        </Box>
      </Box>
    ) : (
      <Box
        sx={{
          gridColumnStart: [10],
          gridColumnEnd: [11, null, null, 11],
          display: 'grid',
          placeContent: 'center'
        }}
      >
        <Button name="Login with Discord" type="button" icon="discord">
          Login
        </Button>
      </Box>
    )}
  </>
);
