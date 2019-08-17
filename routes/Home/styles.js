import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: ${getStatusBarHeight()}px;
  background-color: #8E24AA;
`;