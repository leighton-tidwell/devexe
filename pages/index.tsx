import type { NextPage } from 'next';
import { Button, Logo } from '@/components/index';

const Home: NextPage = () => (
  <>
    <Button type="button" loading onClick={() => {}}>
      Test
    </Button>
    <Logo sx={{ width: '20px' }} />
  </>
);

export default Home;
