import React from 'react';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Menu from './Menu';
import { Container } from './styles';
import Cards from '../Cards';

export default function Content() {
  return (
    <Container>
      <Menu />
      <Cards />
    </Container>
  );
}