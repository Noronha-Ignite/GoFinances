import React from 'react';
import { Control, useController } from 'react-hook-form';

import { FormTransactionType } from '../TransactionTypeButton';

import { Container, FormTransactionTypeButton } from './styles';

type TransactionTypeSelectProps = {
  control: Control<any>;
  name: string;
};

const TransactionTypeSelect: React.FC<TransactionTypeSelectProps> = ({ control, name }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: 'income',
  });

  const handleChangeValue = (newValue: FormTransactionType) => {
    if (field.value === newValue) return;

    field.onChange(newValue);
  };

  return (
    <Container>
      <FormTransactionTypeButton
        onPress={() => handleChangeValue('income')}
        selected={field.value === 'income'}
        type="income"
      />
      <FormTransactionTypeButton
        onPress={() => handleChangeValue('outcome')}
        selected={field.value === 'outcome'}
        type="outcome"
      />
    </Container>
  );
};

export default TransactionTypeSelect;
