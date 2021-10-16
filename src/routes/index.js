import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { AuthContext } from '../contexts/auth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if(loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#131313'}}>
        <ActivityIndicator size="large" color="#00b94a" />
      </View>  
    )
  }
  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  )
}