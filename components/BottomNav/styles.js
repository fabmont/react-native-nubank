import styled from 'styled-components/native';
import { TouchableNativeFeedback } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100px;
  margin-vertical: 16px;
`;

export const ShortcutTouchable = styled.TouchableNativeFeedback.attrs({
  background: TouchableNativeFeedback.Ripple('#FFFFFF1A', false),
})``;

export const ShortcutsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const Shortcut = styled.View`
  height: 100%;
  width: 100px;
  background-color: #AB47BC;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px;
  border-radius: 3px;
`;

export const ShortcutText = styled.Text`
  font-size: 16px;
  color: #FFF;
`;