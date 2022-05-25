import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, Modal } from 'react-native';
import Button from '../../components/Forms/Button';

import { FormTransactionType } from '../../components/Forms/TransactionTypeButton';
import TransactionTypeSelect from '../../components/Forms/TransactionTypeSelect';
import ScreenHeader from '../../components/ScreenHeader';
import { Category } from '../../models/Category';
import CategorySelector from './CategorySelector';

import {
  Container,
  Form,
  FormInput,
  InputFields,
  FormCategorySelectButton
} from './styles';

const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState<FormTransactionType>();
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState<Category>();

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

            <FormCategorySelectButton
              selectedCategory={category}
              onPress={() => setIsCategoryModalOpen(true)}
            />
          </InputFields>

          <Button>Enviar</Button>
        </Form>
      </TouchableWithoutFeedback>

      <Modal visible={isCategoryModalOpen}>
        <CategorySelector
          selectedCategory={category}
          setCategory={setCategory}
          closeSelectCategory={() => setIsCategoryModalOpen(false)}
        />
      </Modal>
    </Container>
  );
}

export default Register;