import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

type ContainerProps = {
  hasError?: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  padding: 16px;

  border-radius: 5px;
  background: ${({ theme }) => theme.colors.shape};
  border: 1px solid ${ ({ theme, hasError }) => 
    !hasError
      ? theme.colors.shape
      : theme.colors.attention
  };

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const CategorySelected = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ArrowDownIcon = styled(Feather).attrs({
  name: 'chevron-down'
})`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Error = styled.Text`
  margin: ${RFValue(4)}px ${RFValue(8)}px;

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.attention};
`;
