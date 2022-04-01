import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Category } from '../../../models/Category';
import { FlatListType } from '../../../models/Utils';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  padding-bottom: ${getBottomSpace() + 8}px;
`;

export const CategoryList = styled(FlatList as FlatListType<Category>)`
  flex: 1;
`;

export const CategoryItem = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.shape};
  
  flex-direction: row;
  align-items: center;

  padding: 16px;
`;

type CategoryItemText = {
  color: string;
}

export const CategoryItemText = styled.Text<CategoryItemText>`
  font-size: ${RFValue(14)}px;
  color: ${({ color }) => color};
`;

export const CategoryIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.text_contrast};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 24px;
`;
