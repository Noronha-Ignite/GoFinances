import styled, { css } from 'styled-components/native';
import color from 'color';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { FormTransactionType } from '.';

type ContainerProps = {
  transactionType: FormTransactionType;
  selected?: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  flex-direction: row;
  flex: 1;

  justify-content: center;
  align-items: center;

  border-radius: 5px;
  padding: 18px 0;

  ${({ selected, theme, transactionType }) => 
    css`
      background-color: ${
        transactionType === 'income' ?
          color(theme.colors.success).alpha(selected ? 0.1 : 0).string() :
          color(theme.colors.attention).alpha(selected ? 0.1 : 0).string()
      };
      border-width: ${RFValue(1.5)}px;
      border-color: ${color(theme.colors.text).alpha(selected ? 0 : 0.2).string()};
    `
  }
`;

type IconProps = {
  type: FormTransactionType;
}

export const Icon = styled(Feather).attrs<IconProps>(
  ({ type, theme }) => ({
    name: type === 'income' ? 'arrow-up-circle' : 'arrow-down-circle',
    color: type === 'income' ? theme.colors.success : theme.colors.attention
  })
)<IconProps>`
  font-size: ${RFValue(20)}px;
  margin-right: ${RFValue(12)}px;
`;

export const TransactionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.title}
`;
