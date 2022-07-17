import React from 'react';
import { Control, useController } from 'react-hook-form';
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
  Footer,
  SelectedAdvertiser
} from './styles';

type Props = {
  control: Control<any>;
  name: string;
  closeSelectCategory?(): void;
}

const CategorySelector: React.FC<Props> = ({
  control,
  name,
  closeSelectCategory
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: undefined,
  });

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
            onPress={() => field.onChange(item)}
            activeOpacity={.6}
          >
            <CategoryIcon name={item.icon} color={item.color} />
            <CategoryItemText color={item.color}>{item.name}</CategoryItemText>
            { item.key === field.value?.key && <SelectedAdvertiser /> }
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