import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {};

const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{rest.children}</ButtonText>
    </Container>
  );
}

export default Button;