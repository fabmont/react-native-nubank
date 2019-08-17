import React from 'react';
import Icons from '@expo/vector-icons/Feather';
import { Container, ShortcutsContainer, Shortcut, ShortcutText, ShortcutTouchable } from './styles';
import shortcuts from './Shortcuts.json';

export default function BottomNav() {
  return (
    <Container>
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