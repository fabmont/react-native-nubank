import React from 'react';
import Icons from '@expo/vector-icons/Feather';
import { Container, ShortcutsContainer, Shortcut, ShortcutText, ShortcutTouchable } from './styles';
import shortcuts from './Shortcuts.json';

export default function BottomNav({ translateY }) {
  return (
    <Container
      style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          }),
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
    >
      <ShortcutsContainer>
        {
          shortcuts.map(item => (
            <ShortcutTouchable key={item.id}>
              <Shortcut>
                <Icons
                  name={item.icon}
                  size={16}
                  color="#FFF"
                />
                <ShortcutText>
                  {item.title}
                </ShortcutText>
              </Shortcut>
            </ShortcutTouchable>
          ))
        }
      </ShortcutsContainer>
    </Container>
  );
}