import type { NextPage } from 'next';
import { Header, Hero, Wrapper } from '@/components/index';

const Home: NextPage = () => (
  <Wrapper>
    <Header auth={false} />
    <Hero />
  </Wrapper>
);

export default Home;
