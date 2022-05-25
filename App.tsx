import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { CategoriesProvider } from './src/contexts/useCategories';

import Dashboard from './src/screens/Dashboard';
import Register from './src/screens/Register';
import CategorySelector from './src/screens/Register/CategorySelector';

export function App() {
  const [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <CategoriesProvider>
        <StatusBar style="light" />
        <Register />
      </CategoriesProvider>
    </ThemeProvider>
  );
}
