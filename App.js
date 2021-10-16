import React from 'react';
import { StatusBar, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';

import { Routes } from './src/routes';

LogBox.ignoreAllLogs();
export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#131313'}}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar barStyle="light-content" backgroundColor="#131313" />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}