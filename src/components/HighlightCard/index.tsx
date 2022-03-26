import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Amount,
  LastTransaction,
} from './styles';

export type HighlightCardType = 'income' | 'outcome' | 'total';

interface HighlightCardProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: HighlightCardType;
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
        <LastTransaction cardType={type}>{lastTransaction}</LastTransaction>
      </Content>
    </Container>
  );
}

export default HighlightCard;