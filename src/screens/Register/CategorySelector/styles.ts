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

type CategoryItemProps = {
  selected?: boolean;
}

export const CategoryItem = styled.TouchableOpacity<CategoryItemProps>`
  background: ${({
      theme: {
        colors: {
          shape,
          success_light
        }
      },
      selected
    }) => color(selected ? success_light : shape).alpha(0.15).string()
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
  background: ${({ theme }) => theme.colors.text_contrast};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 24px;
`;
