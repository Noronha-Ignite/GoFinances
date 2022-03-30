import React, { useState } from 'react';

import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import TransactionTypeButton, { FormTransactionType } from '../../components/Forms/TransactionTypeButton';

import {
  Container,
  Header,
  Title,
  Form,
  InputFields,
  TransactionButtonsWrapper
} from './styles';

const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState<FormTransactionType>();

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <InputFields>
          <Input
            placeholder='Nome'
            style={{ marginBottom: 8 }}
          />
          <Input
            placeholder='Preço'
            style={{ marginBottom: 8 }}
          />
          <TransactionButtonsWrapper>
            <TransactionTypeButton
              onPress={() => setTransactionType('income')}
              selected={transactionType === 'income'}
              type='income'
              style={{ marginRight: 4 }}
            />
            <TransactionTypeButton
              onPress={() => setTransactionType('outcome')}
              selected={transactionType === 'outcome'}
              type='outcome'
              style={{ marginLeft: 4 }}
            />
          </TransactionButtonsWrapper>
        </InputFields>

        <Button>Enviar</Button>
      </Form>
    </Container>
  );
}

export default Register;