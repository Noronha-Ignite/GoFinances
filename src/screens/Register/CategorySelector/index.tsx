import React from 'react';
import Button from '../../../components/Forms/Button';

import ScreenHeader from '../../../components/ScreenHeader';

import { useCategories } from '../../../contexts/useCategories';

import {
  CategoryIcon,
  CategoryItem,
  CategoryItemText,
  CategoryList,
  Container,
  Divider,
  Footer
} from './styles';

const CategorySelector: React.FC = () => {
  const { categories } = useCategories();

  return (
    <Container>
      <ScreenHeader title='Categoria' />

      <CategoryList
        data={categories}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <CategoryItem>
            <CategoryIcon name={item.icon} color={item.color} />
            <CategoryItemText color={item.color}>{item.name}</CategoryItemText>
          </CategoryItem>
        )}
      />

      <Footer>
        <Button>Selecionar</Button>
      </Footer>
    </Container>
  );
}

export default CategorySelector;