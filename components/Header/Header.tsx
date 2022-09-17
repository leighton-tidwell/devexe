import { Button, Icon, Logo } from '@/components/index';
import { Box, Grid, Text } from 'theme-ui';
import { HeaderProps } from './headerTypes';

export const Header = ({ auth }: HeaderProps) => (
  <Grid as="header" columns={12}>
    <Box
      sx={{
        gridColumnStart: [1, 1, 1, 1],
        gridColumnEnd: [7, 7, 6, 6, 5],
        display: 'grid',
        justifyContent: 'flex-start',
        alignItems: 'center',
        py: 4
      }}
    >
      <Logo sx={{ width: '100%' }} />
    </Box>
    {auth ? (
      <Box
        sx={{
          gridColumnStart: [8, 7],
          gridColumnEnd: [13, 13, 13, 13],
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
          gridColumnStart: [10, 10, 11, 11, 11],
          gridColumnEnd: [13, 13, 13, 13],
          display: 'grid',
          placeContent: 'center end',
          button: {
            maxWidth: 'fit-content'
          }
        }}
      >
        <Button name="Login with Discord" type="button" icon="discord">
          Login
        </Button>
      </Box>
    )}
  </Grid>
);
