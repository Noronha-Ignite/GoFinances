import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: ${RFValue(80)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_contrast};
`;

export const TransactionsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  flex: 1;

  margin-top: ${RFValue(16)}px;
`;
