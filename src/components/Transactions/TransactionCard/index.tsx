import React, { useMemo } from 'react';

import { useCategories } from '../../../contexts/useCategories';
import { Transaction } from '../../../models/Transactions';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  CategoryIcon,
  CategoryName,
  TransactionDate,
} from './styles';

type TransactionCardProps = {
  transaction: Transaction;
};

function TransformTimestampToReadableDate(timestamp: number) {
  return new Date(timestamp).toLocaleDateString();
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  const { categories } = useCategories();
  const category = useMemo(() => {
    const category = categories.find(category => category.key === transaction.category);

    return category ?? {
      name: 'Outro',
      key: 'other',
      icon: 'globe'
    }
  }, [transaction, categories]);
  
  return (
    <Container>
      <Title>{transaction.name}</Title>
      <Amount type={transaction.type}>
        {transaction.type === 'outcome' && '- '}
        {transaction.amount}
      </Amount>

      <Footer>
        <Category>
          <CategoryIcon category={category}/>
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <TransactionDate>
          {TransformTimestampToReadableDate(transaction.timestamp)}
        </TransactionDate>
      </Footer>
    </Container>
  );
}

export default TransactionCard;