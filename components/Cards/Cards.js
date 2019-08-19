import React from 'react';
import Icon from '@expo/vector-icons/Feather';
import { Container, ContainerGroup, Header, AmountContainer, Footer, HeaderTitle, BillTitle, BillAmount, BillAmountBold, AvailableLimit, AvailableLimitGreen } from './styles';

export default function Cards() {
  return (
    <Container>
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
        <Footer></Footer>
      </ContainerGroup>
    </Container>
  );
}
