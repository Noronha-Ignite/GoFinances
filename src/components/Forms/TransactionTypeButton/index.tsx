import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { TransactionType } from '../../../models/Transactions';

import { TransactionText, Container, Icon } from './styles';

export type FormTransactionType = Extract<TransactionType, 'income' | 'outcome'>;

interface TransactionTypeButtonProps extends RectButtonProps {
  type: FormTransactionType;
  selected?: boolean;
};

function CapitalizeText(text: string) {
  return text.split('').map((char, index, fullText) => {
    if (index === 0 || fullText[index - 1] === ' ') return char.toUpperCase();
    return char;
  });
}

const TransactionTypeButton: React.FC<TransactionTypeButtonProps> = ({ type, selected, ...rest }) => {
  return (
    <Container transactionType={type} selected={selected} {...rest}>
      <Icon type={type} />
      <TransactionText>{CapitalizeText(type)}</TransactionText>
    </Container>
  );
}

export default TransactionTypeButton;