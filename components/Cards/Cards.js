import React from 'react';
import Icon from '@expo/vector-icons/Feather';
import { Container, ContainerGroup, Header, AmountContainer, Footer, HeaderTitle, BillTitle, BillAmount, BillAmountBold, AvailableLimit, AvailableLimitGreen, FooterMessage } from './styles';

export default function Cards({ translateY }) {
  return (
    <ContainerGroup>
      <Header>
        <Icon
          name="credit-card"
          color="#A9A9A9"
          size={24}
        />
        <HeaderTitle>
          Cartão de crédito
        </HeaderTitle>
      </Header>
      <AmountContainer>
        <BillTitle>
          FATURA ATUAL
        </BillTitle>
        <BillAmount>
          R$ <BillAmountBold>900</BillAmountBold>,49
        </BillAmount>
        <AvailableLimit>
          Limite disponível {' '}
          <AvailableLimitGreen>
            R$ 749, 51
          </AvailableLimitGreen>
        </AvailableLimit>
      </AmountContainer>
      <Footer>
        <FooterMessage>
          Transferência de R$ 20,00 recebida de Fabrício Monteiro hoje às 16:00.
        </FooterMessage>
      </Footer>
    </ContainerGroup>
  );
}
