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

import { Routes } from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';
import { TransactionContextProvider } from './src/contexts/useTransactions';

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
        <TransactionContextProvider>
          <StatusBar style="light" />
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </TransactionContextProvider>
      </CategoriesProvider>
    </ThemeProvider>
  );
}
