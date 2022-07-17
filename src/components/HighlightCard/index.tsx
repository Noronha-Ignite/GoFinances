import React from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Amount,
  LastTransaction,
} from './styles';

import { TransactionType } from '../../models/Transactions';

interface HighlightCardProps {
  title: string;
  amount: string;
  lastTransaction?: string;
  type: TransactionType | 'total';
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  amount,
  lastTransaction,
  type
}) => {
  return (
    <Container cardType={type}>
      <Header>
        <Title cardType={type}>{title}</Title>

        <Icon cardType={type}/>
      </Header>

      <Content>
        <Amount cardType={type}>{amount}</Amount>
        {lastTransaction && <LastTransaction cardType={type}>{lastTransaction}</LastTransaction>}
      </Content>
    </Container>
  );
}

export default HighlightCard;