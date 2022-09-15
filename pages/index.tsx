import type { NextPage } from 'next';
import { Button, Logo } from '@/components/index';
import { Box } from 'theme-ui';

const Home: NextPage = () => (
  <Box sx={{ padding: '1em', display: 'flex', gap: '1em' }}>
    <Button
      name="test-cta-button"
      type="button"
      onClick={() => {}}
      variant="cta"
      icon="discord"
    >
      Test
    </Button>
    <Button name="test-button" type="button" onClick={() => {}} icon="discord">
      Test
    </Button>
    <Button name="test-button" type="button" onClick={() => {}}>
      Test
    </Button>
    <Logo sx={{ width: '20px' }} />
    test test
  </Box>
);

export default Home;
