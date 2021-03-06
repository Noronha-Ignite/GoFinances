import { FlatList, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Category } from '../../../models/Category';
import { FlatListType } from '../../../models/Utils';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import color from 'color';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  padding-bottom: ${Platform.OS === 'ios' ? getBottomSpace() : 24}px;
`;

export const CategoryList = styled(FlatList as FlatListType<Category>)`
  flex: 1;
`;

export const CategoryItem = styled.TouchableOpacity`
  background: ${({
      theme,
    }) => theme.colors.background
  };
  
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
  background: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 24px;
`;

export const SelectedAdvertiser = styled.View`
  height: 10px;
  width: 10px;
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 10px;
  margin-left: auto;
  margin-right: 8px;
`;
