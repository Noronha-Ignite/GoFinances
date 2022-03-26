import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Dashboard from './src/screens/Dashboard';
import theme from './src/global/styles/theme';
import { CategoriesProvider } from './src/contexts/useCategories';

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
        <Dashboard />
      </CategoriesProvider>
    </ThemeProvider>
  );
}
