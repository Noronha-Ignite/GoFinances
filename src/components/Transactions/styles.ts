import { FlatList, FlatListProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Transaction } from '../../models/Transactions';
import { FlatListType } from '../../models/Utils';

export const Container = styled.View`
  flex: 1;
  margin-top: ${RFValue(80)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_contrast};
`;

export const TransactionsList = styled(FlatList as FlatListType<Transaction>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  }
})`
  width: 100%;
  flex: 1;

  margin-top: ${RFValue(16)}px;
`;
