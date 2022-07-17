import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { LoadingDots } from '../../assets/LoadingDots';

import Button from '../../components/Forms/Button';
import TransactionTypeSelect from '../../components/Forms/TransactionTypeSelect';
import ScreenHeader from '../../components/ScreenHeader';
import { useTransactions } from '../../contexts/useTransactions';
import { Category } from '../../models/Category';
import { NewTransaction } from '../../models/Transactions';
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
  const { createTransaction } = useTransactions();
  const navigator = useNavigation();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    mode: 'onBlur',
    resolver: yupResolver(RegisterSchema),
  });

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const onSubmit = async (data: FormFields) => {
    try {
      const transaction: NewTransaction = {
        ...data,
        amount: Number(data.amount),
        category: data.category.key,
      };

      await createTransaction(transaction);
      navigator.navigate('Listagem');
    } catch (err) {
      console.log(err);
      Alert.alert('Ocorreu um erro ao salvar...');
    }
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
            {!isSubmitting ? 'Enviar' : <LoadingDots size={100} />}
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