import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Transaction } from '../../models/Transactions';

import {
  Container,
  Title,
  TransactionsList
} from './styles';

import TransactionCard from './TransactionCard';

const MOCK_DATA: Transaction[] = [
  { timestamp: 312312, name: 'Desenvolvimento de site', type: 'income', category: 'sell', amount: 'R$ 12.000,00' },
  { timestamp: 312312312, name: 'Hamburgueria Pizzi', type: 'outcome', category: 'food', amount: 'R$ 59,00' },
  { timestamp: 432423, name: 'Aluguel do apartamento', type: 'outcome', category: 'home', amount: 'R$ 1.500,00' }
];

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_DATA);

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