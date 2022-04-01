import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ArrowDownIcon, CategorySelected, Container } from './styles';

type CategorySelectButton = TouchableOpacityProps;

const CategorySelectButton: React.FC<CategorySelectButton> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <CategorySelected>Categoria</CategorySelected>
      <ArrowDownIcon />
    </Container>
  );
}

export default CategorySelectButton;