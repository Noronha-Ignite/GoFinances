import React from 'react';
import { LoadingDots } from '../../assets/LoadingDots';
import HighlightCard from '../../components/HighlightCard';
import Transactions from '../../components/Transactions';
import { useTransactions } from '../../contexts/useTransactions';
import { Transaction } from '../../models/Transactions';
import { MonthIndex, MONTH_NAMES } from '../../utils/contants';
import { formatCurrency } from '../../utils/format';
import Header from './Header';

import {
  Container,
  HighlightCards,
  Content,
} from './styles';

const getTransactionDate = (transaction: Transaction): any => {
  return new Date(transaction.timestamp);
}

const Dashboard: React.FC = () => {
  const { transactions, isLoading } = useTransactions();



  const incomingAmount = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, tran) => tran.amount + acc, 0);

  const incomingLastTransaction = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((lastTran, tran) => {
      if (!lastTran || tran.timestamp > lastTran.timestamp) {
        return tran;
      }

      return lastTran
  }, (null as Transaction | null))



  const outcomingAmount = transactions
    .filter((transaction) => transaction.type === 'outcome')
    .reduce((acc, tran) => tran.amount + acc, 0);

  const outcomingLastTransaction = transactions
    .filter((transaction) => transaction.type === 'outcome')
    .reduce((lastTran, tran) => {
      if (!lastTran || tran.timestamp > lastTran.timestamp) {
        return tran;
      }

      return lastTran
  }, (null as Transaction | null))



  const firstTransaction = transactions.reduce((lastTran, tran) => {
      if (!lastTran || tran.timestamp < lastTran.timestamp) {
        return tran;
      }

      return lastTran
  }, (null as Transaction | null))
  const lastTransaction = transactions.reduce((lastTran, tran) => {
      if (!lastTran || tran.timestamp > lastTran.timestamp) {
        return tran;
      }

      return lastTran
  }, (null as Transaction | null))
  const totalAmount = incomingAmount - outcomingAmount;



  if (isLoading) {
    return <LoadingDots />
  }

  return (
    <Container>
      <Header />

      <HighlightCards>
        <HighlightCard
          title='Entradas'
          amount={formatCurrency(incomingAmount)}
          lastTransaction={
            incomingLastTransaction ?
            `Última entrada dia ${getTransactionDate(incomingLastTransaction).getDate()} de ${MONTH_NAMES[getTransactionDate(incomingLastTransaction).getMonth() as MonthIndex]}` :
            undefined
          }
          type='income'
        />
        <HighlightCard
          title='Saídas'
          amount={formatCurrency(outcomingAmount)}
          lastTransaction={
            outcomingLastTransaction ?
            `Última entrada dia ${getTransactionDate(outcomingLastTransaction).getDate()} de ${MONTH_NAMES[getTransactionDate(outcomingLastTransaction).getMonth() as MonthIndex]}` :
            undefined
          }
          type='outcome'
        />
        <HighlightCard
          title='Total'
          amount={formatCurrency(totalAmount)}
          lastTransaction={firstTransaction && lastTransaction ?
            `${new Date(firstTransaction.timestamp).toLocaleDateString()} à ${new Date(lastTransaction.timestamp).toLocaleDateString()}`:
            undefined
          }
          type='total'
        />
      </HighlightCards>

      <Content>
        <Transactions />
      </Content>
    </Container>
  );
}

export default Dashboard;