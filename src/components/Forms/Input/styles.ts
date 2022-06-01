import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type ContainerProps = {
  hasError?: boolean;
}

export const Container = styled(TextInput)<ContainerProps>`
  width: 100%;

  padding: 16px 18px;

  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text_contrast};
  border: 1px solid ${ ({ theme, hasError }) => 
    !hasError
      ? theme.colors.shape
      : theme.colors.attention
  };
  border-radius: 5px;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Error = styled.Text`
  margin: ${RFValue(4)}px ${RFValue(8)}px;

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.attention};
`;
