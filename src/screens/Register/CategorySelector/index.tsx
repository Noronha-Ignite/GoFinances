import React from 'react';
import Button from '../../../components/Forms/Button';

import ScreenHeader from '../../../components/ScreenHeader';

import { useCategories } from '../../../contexts/useCategories';
import { Category } from '../../../models/Category';

import {
  CategoryIcon,
  CategoryItem,
  CategoryItemText,
  CategoryList,
  Container,
  Divider,
  Footer
} from './styles';

type Props = {
  selectedCategory?: Category;
  setCategory?(category: Category): void;
  closeSelectCategory?(): void;
}

const CategorySelector: React.FC<Props> = ({
  selectedCategory,
  setCategory,
  closeSelectCategory
}) => {
  const { categories } = useCategories();

  return (
    <Container>
      <ScreenHeader title='Categoria' />

      <CategoryList
        data={categories}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <CategoryItem
            onPress={() => setCategory?.(item)}
            selected={item.key === selectedCategory?.key}
            activeOpacity={.6}
          >
            <CategoryIcon name={item.icon} color={item.color} />
            <CategoryItemText color={item.color}>{item.name}</CategoryItemText>
          </CategoryItem>
        )}
      />

      <Footer>
        <Button onPress={closeSelectCategory}>Selecionar</Button>
      </Footer>
    </Container>
  );
}

export default CategorySelector;