import type { NextPage } from 'next';
import { Header, Wrapper } from '@/components/index';

const Home: NextPage = () => (
  <Wrapper>
    <Header auth />
  </Wrapper>
);

export default Home;
