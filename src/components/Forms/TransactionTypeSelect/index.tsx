import React from 'react';

import { FormTransactionType } from '../TransactionTypeButton';

import { Container, FormTransactionTypeButton } from './styles';

type TransactionTypeSelectProps = {
  value?: FormTransactionType;
  onChangeValue: (newTransactionValue: FormTransactionType) => void;
}

const TransactionTypeSelect: React.FC<TransactionTypeSelectProps> = ({ value, onChangeValue }) => {
  const handleChangeValue = (newValue: FormTransactionType) => {
    if (value === newValue) return;

    onChangeValue(newValue);
  }

  return (
    <Container>
      <FormTransactionTypeButton
        onPress={() => handleChangeValue('income')}
        selected={value === 'income'}
        type='income'
      />
      <FormTransactionTypeButton
        onPress={() => handleChangeValue('outcome')}
        selected={value === 'outcome'}
        type='outcome'
      />
    </Container>
  );
}

export default TransactionTypeSelect;