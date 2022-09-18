import { Button, Logo, UserDropdown } from '@/components/index';
import { Box, Grid } from 'theme-ui';
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
      <Logo />
    </Box>
    {auth ? (
      <UserDropdown />
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
