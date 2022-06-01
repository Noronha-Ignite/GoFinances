import React from 'react';
import { ErrorOption } from 'react-hook-form';
import { View, ViewProps } from 'react-native';
import { Category } from '../../../models/Category';

import { ArrowDownIcon, CategorySelected, Container, CategoryIcon, Error } from './styles';

type CategorySelectButton = ViewProps & {
  selectedCategory?: Category;
  error?: ErrorOption;
  onPress?: () => void;
};

const CategorySelectButton: React.FC<CategorySelectButton> = ({
  selectedCategory,
  error,
  onPress,
  ...rest
}) => {
  return (
    <View {...rest}>
      {error && (
        <Error>{error.message}</Error>
      )}
      <Container onPress={onPress} hasError={!!error}>
        {selectedCategory && (
          <CategoryIcon name={selectedCategory.icon} color={selectedCategory.color} />
        )}
        <CategorySelected style={selectedCategory && { color: selectedCategory.color }}>
          {selectedCategory?.name ?? 'Categoria'}
        </CategorySelected>
        <ArrowDownIcon />
      </Container>
    </View>
  );
}

export default CategorySelectButton;