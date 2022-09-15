import { Grid } from 'theme-ui';
import { WrapperProps } from './wrapperTypes';

export const Wrapper = ({ children }: WrapperProps) => (
  <Grid columns={12} gap={3}>
    {children}
  </Grid>
);
