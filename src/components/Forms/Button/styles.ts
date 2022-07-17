import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.secondary};

  padding: 16px 18px;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.shape}
`;
