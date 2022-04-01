import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { FormTransactionType } from '../../components/Forms/TransactionTypeButton';
import TransactionTypeSelect from '../../components/Forms/TransactionTypeSelect';

import {
  Container,
  Header,
  Title,
  Form,
  SubmitButton,
  FormInput,
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
            <TransactionTypeSelect
              value={transactionType}
              onChangeValue={newValue => setTransactionType(newValue)}
            />
          </InputFields>

          <SubmitButton>Enviar</SubmitButton>
        </Form>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default Register;