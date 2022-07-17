import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}

export type AppRootParamList = {
  Listagem: undefined;
  Registrar: undefined;
  Resumo: undefined
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}
