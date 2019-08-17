import React from 'react'
import { Container } from './styles';
import TopBar from '../../components/TopBar';
import Content from '../../components/Content';
import BottomNav from '../../components/BottomNav';

const Home = () => {
  return (
    <Container>
      <TopBar />
      <Content />
      <BottomNav />
    </Container>
  );
}

export default Home;
