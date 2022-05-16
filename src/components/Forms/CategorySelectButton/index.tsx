import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Category } from '../../../models/Category';

import { ArrowDownIcon, CategorySelected, Container, CategoryIcon } from './styles';

type CategorySelectButton = TouchableOpacityProps & {
  selectedCategory?: Category;
};

const CategorySelectButton: React.FC<CategorySelectButton> = ({ selectedCategory, ...rest }) => {
  return (
    <Container {...rest}>
      {selectedCategory && (
        <CategoryIcon name={selectedCategory.icon} color={selectedCategory.color} />
      )}
      <CategorySelected style={selectedCategory && { color: selectedCategory.color }}>
        {selectedCategory?.name ?? 'Categoria'}
      </CategorySelected>
      <ArrowDownIcon />
    </Container>
  );
}

export default CategorySelectButton;