import { Box, Grid } from 'theme-ui';
import { WrapperProps } from './wrapperTypes';

export const Wrapper = ({ children }: WrapperProps) => (
  <Grid columns={12} gap={3}>
    <Box
      sx={{ gridColumnStart: [2, 2, 2, 3], gridColumnEnd: [12, 12, 12, 11] }}
    >
      {children}
    </Box>
  </Grid>
);
