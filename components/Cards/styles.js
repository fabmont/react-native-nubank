import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const CardContainer = styled(Animated.View)`
  height: 100%;
  width: 90%;
  background-color: #FFF;
  border-radius: 3px;
  overflow: hidden;
  position: absolute;
  top: 0;
`;

export const ContainerGroup = styled.View`
  height: 100%;
  justify-content: space-between;
`;

export const Header = styled.View`
  height: 20%;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: #A9A9A9;
  margin-left: 20px;
`;

export const Footer = styled.View`
  height: 20%;
  background-color: #F6F6F6;
  padding: 20px;
`;

export const AmountContainer = styled.View`
  height: 60%;
  justify-content: center;
  padding: 20px;
`;

export const BillTitle = styled.Text`
  color: #00BCD4;
  font-size: 14px;
  font-weight: bold;
`;

export const BillAmount = styled.Text`
  color: #00BCD4;
  font-size: 36px;
`;

export const BillAmountBold = styled.Text`
  color: #00BCD4;
  font-size: 36px;
  font-weight: bold;
`;

export const AvailableLimit = styled.Text`
  font-size: 14px;
  color: black;
`;

export const AvailableLimitGreen = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #C0CA33;
`;

export const AvailableAmount = styled.Text``;

export const FooterMessage = styled.Text`
  fontSize: 12px;
  color: grey;
`;