import React from 'react';
import {
  Image,
} from 'react-native';
import Icons from '@expo/vector-icons/Feather';
import { Container, LogoHolder, UserName } from './styles';
import Logo from '../../assets/Nubank_Logo.png'

export default function TopBar() {
  return (
    <Container>
      <LogoHolder>
        <Image
          source={Logo}
          resizeMode="contain"
          style={{ marginEnd: 12, height: 50, width: 50 }}
        />
        <UserName>Fabrício</UserName>
      </LogoHolder>
      <Icons
        name="chevron-down"
        color="#FFF"
        size={20}
      />
    </Container>
  )
}
