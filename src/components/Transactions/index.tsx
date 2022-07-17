import React from 'react';
import { useTransactions } from '../../contexts/useTransactions';

import {
  Container,
  Title,
  TransactionsList
} from './styles';

import TransactionCard from './TransactionCard';

const Transactions: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <Container>
      <Title>Listagem</Title>

      <TransactionsList
        data={transactions}
        keyExtractor={item => item.timestamp.toString()}
        renderItem={(({ item }) => <TransactionCard transaction={item} />)}
      />
    </Container>
  );
}

export default Transactions;