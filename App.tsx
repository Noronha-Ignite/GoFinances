import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dashboard from './src/screens/Dashboard';

export function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <Dashboard />
    </Fragment>
  );
}
