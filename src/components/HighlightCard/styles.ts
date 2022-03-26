import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../global/styles/theme';

import { HighlightCardType } from '.';

type TypeProps = {
  cardType: HighlightCardType;
}

type IconStyles = {
  name: string,
  color: string;
}

function getFontColorByType(type: HighlightCardType, options?: { lessContrast?: boolean }) {
  if (type === 'total') {
    return theme.colors.shape;
  }

  return options?.lessContrast ? theme.colors.text : theme.colors.title;
}

function getIconStylesByType(type: HighlightCardType): IconStyles {
  switch(type) {
    case 'income':
      return { name: 'arrow-up-circle', color: theme.colors.success};
    case 'outcome':
      return { name: 'arrow-down-circle', color: theme.colors.attention};
    case 'total':
      return { name: 'dollar-sign', color: theme.colors.shape};
  }
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, cardType }) => 
    cardType === 'total' ?
      theme.colors.secondary :
      theme.colors.shape
  };

  width: ${RFValue(300)}px;
  border-radius: ${RFValue(5)}px;

  padding: ${RFValue(20)}px ${RFValue(24)}px ${RFValue(40)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  
  color: ${({ cardType }) => getFontColorByType(cardType)};
`;

export const Icon = styled(Feather).attrs<TypeProps>(
  props => getIconStylesByType(props.cardType)
)`
  font-size: ${RFValue(32)}px;
`;

export const Content = styled.View`
  margin-top: 40px;
`;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ cardType }) => getFontColorByType(cardType)};
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ cardType }) => getFontColorByType(cardType, { lessContrast: true })};
`;
