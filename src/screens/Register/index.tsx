import React, { useState } from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';

import { FormTransactionType } from '../../components/Forms/TransactionTypeButton';

import {
  Container,
  Header,
  Title,
  Form,
  TransactionButtonsWrapper,
  SubmitButton,
  FormInput,
  FormTransactionTypeButton,
  InputFields
} from './styles';

const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState<FormTransactionType>();

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Form>
          <InputFields
            keyboardShouldPersistTaps='handled'
          >
            <FormInput
              placeholder='Nome'
            />
            <FormInput
              placeholder='Preço'
              keyboardType='numeric'
            />
            <TransactionButtonsWrapper>
              <FormTransactionTypeButton
                onPress={() => setTransactionType('income')}
                selected={transactionType === 'income'}
                type='income'
              />
              <FormTransactionTypeButton
                onPress={() => setTransactionType('outcome')}
                selected={transactionType === 'outcome'}
                type='outcome'
              />
            </TransactionButtonsWrapper>
          </InputFields>

          <SubmitButton>Enviar</SubmitButton>
        </Form>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default Register;