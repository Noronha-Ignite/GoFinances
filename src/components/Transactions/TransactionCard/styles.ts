import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { TransactionType } from '../../../models/Transactions';
import { RFValue } from 'react-native-responsive-fontsize';
import { Category as CategoryModel } from '../../../models/Category';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  border-radius: 5px;

  padding: 16px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 4px;
`

type AmountProps = {
  type: TransactionType;
}

export const Amount = styled.Text<AmountProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) => 
    type === 'income' ?
      theme.colors.success :
      theme.colors.attention
  };
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(20)}px;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

type CategoryIconProps = {
  category: CategoryModel;
}

export const CategoryIcon = styled(Feather).attrs<CategoryIconProps>(
  ({ category }) => ({
    name: category.icon,
  })
)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: ${RFValue(12)}px;
`
export const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`
export const TransactionDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`
