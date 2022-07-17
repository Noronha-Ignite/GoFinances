import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Button from '../../components/Forms/Button';
import TransactionTypeSelect from '../../components/Forms/TransactionTypeSelect';
import ScreenHeader from '../../components/ScreenHeader';
import { Category } from '../../models/Category';
import CategorySelector from './CategorySelector';
import {
  Container,
  Form, FormCategorySelectButton, FormInput,
  InputFields
} from './styles';
import { RegisterSchema } from './validator';

type FormFields = {
  name: string;
  amount: string;
  type: 'income' | 'outcome';
  category: Category;
}

const Register: React.FC = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFields>({
    mode: 'onBlur',
    resolver: yupResolver(RegisterSchema),
  });

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const onSubmit = (data: FormFields) => {
    console.log(data);

    
  }

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
              control={control}
              name="name"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors?.name}
            />
            <FormInput
              placeholder='Preço'
              keyboardType='numeric'
              control={control}
              name="amount"
              error={errors?.amount}
            />
            <TransactionTypeSelect
              control={control}
              name='type'
            />

            <FormCategorySelectButton
              selectedCategory={watch('category')}
              onPress={() => setIsCategoryModalOpen(true)}
              error={errors?.category?.key}
            />
          </InputFields>

          <Button
            onPress={handleSubmit(onSubmit)}
            style={{ marginBottom: getBottomSpace() }}
          >
            Enviar
          </Button>
        </Form>
      </TouchableWithoutFeedback>

      <Modal visible={isCategoryModalOpen}>
        <CategorySelector
          control={control}
          name="category"
          closeSelectCategory={() => setIsCategoryModalOpen(false)}
        />
      </Modal>
    </Container>
  );
}

export default Register;