import React from 'react';
import Icons from '@expo/vector-icons/Feather';
import {
  Container,
  QRcode,
  AccountInfo,
  AccountInfoBold,
  MenuItemHolder,
  MenuItemInfo,
  MenuItemTitle,
  LogoutButton,
  LogoutButtonText,
  LogoutButtonTouchable,
} from './styles';
import menuOptions from './Options.json';

export default function Menu() {
  return (
    <Container>
      <QRcode />

      <AccountInfo style={{ paddingBottom: 6 }}>
        Banco <AccountInfoBold>260</AccountInfoBold> - Nu Pagamentos S.A.
      </AccountInfo>
      <AccountInfo style={{ paddingBottom: 6 }}>
        Agência <AccountInfoBold>0001</AccountInfoBold>
      </AccountInfo>
      <AccountInfo style={{ paddingBottom: 24 }}>
        Conta <AccountInfoBold>1234567-8</AccountInfoBold>
      </AccountInfo>

      {
        menuOptions.map(item => (
          <MenuItemHolder key={item.id}>
            <MenuItemInfo>
              <Icons
                name={item.icon}
                color="#FFF"
                size={20}
              />
              <MenuItemTitle>{item.title}</MenuItemTitle>
            </MenuItemInfo>
            <Icons
              name="chevron-right"
              color="#FFF"
              size={20}
            />
          </MenuItemHolder>
        ))
      }
      <LogoutButtonTouchable>
        <LogoutButton>
          <LogoutButtonText>
            SAIR DA CONTA
          </LogoutButtonText>
        </LogoutButton>
      </LogoutButtonTouchable>
    </Container>
  );
}