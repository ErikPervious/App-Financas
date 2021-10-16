import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

import { CustomDrawer } from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

export function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={ props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        labelStyle: {
          fontWeight: 'bold'
        },
        drawerStyle: {
          backgroundColor: '#171717'
        },
        drawerActiveTintColor: '#FFF',
        drawerActiveBackgroundColor: '#00b94a',
        drawerInactiveBackgroundColor: '#000',
        drawerInactiveTintColor: '#DDD',
        itemStyle: {
          marginVertical: 5
        },
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
      />
      <AppDrawer.Screen
        name="Registrar"
        component={New}
      />
      <AppDrawer.Screen
        name="Perfil"
        component={Profile}
      />
    </AppDrawer.Navigator>
  );
}