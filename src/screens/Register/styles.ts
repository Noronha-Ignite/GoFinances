import { Platform } from 'react-native';
import styled from 'styled-components/native';

import CategorySelectButton from '../../components/Forms/CategorySelectButton';
import Input from '../../components/Forms/Input';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Form = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
})`
  flex: 1;
  justify-content: space-between;

  width: 100%;
  
  padding: 24px;
`;

export const InputFields = styled.ScrollView`
  margin-bottom: 24px;
`;

export const FormInput = styled(Input).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.text,
}))`
  margin-bottom: 8px;
`;

export const FormCategorySelectButton = styled(CategorySelectButton)`
  margin-top: 16px;
`
