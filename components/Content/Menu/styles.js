import styled from 'styled-components/native';
import { TouchableNativeFeedback, Animated } from 'react-native';

export const Container = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    paddingTop: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
  }
})`
  height: 100%;
  width: 100%;
`;

export const QRcode = styled.View`
  height: 100px;
  width: 100px;
  background-color: #000000;
  margin-bottom: 24px;
`;

export const AccountInfo = styled.Text`
  font-size: 14px;
  color: #FFF;
`;

export const AccountInfoBold = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;

export const MenuItemHolder = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-vertical: 14px;
  border-top-width: 1px;
  border-color: #AB47BC;
`;

export const MenuItemInfo = styled.View`
  flex-direction: row;
`;

export const MenuItemTitle = styled.Text`
  font-size: 16px;
  color: #FFF;
  margin-left: 12px;
`;

export const LogoutButtonTouchable = styled.TouchableNativeFeedback.attrs({
  background: TouchableNativeFeedback.Ripple('#FFFFFF1A', false),
})``;

export const LogoutButton = styled.View`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border-color: #AB47BC;
  border-width: 1.5px;
  justify-content; center;
  align-items: center;
  margin-top: 20px;
`;

export const LogoutButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;
