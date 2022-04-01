import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { FormTransactionType } from '../../components/Forms/TransactionTypeButton';
import TransactionTypeSelect from '../../components/Forms/TransactionTypeSelect';
import ScreenHeader from '../../components/ScreenHeader';

import {
  Container,
  Form,
  SubmitButton,
  FormInput,
  InputFields,
  FormCategorySelectButton
} from './styles';

const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState<FormTransactionType>();

  return (
    <Container>
      <ScreenHeader title='Cadastro' />

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

            <FormCategorySelectButton />
          </InputFields>

          <SubmitButton>Enviar</SubmitButton>
        </Form>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default Register;