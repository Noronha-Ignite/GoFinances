import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: ${RFValue(5)}px;

  padding: ${RFValue(20)}px ${RFValue(24)}px ${RFValue(40)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  
  color: ${({ theme }) => theme.colors.title};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(32)}px;
`;

export const Content = styled.View`
  margin-top: 40px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.title};
`;
