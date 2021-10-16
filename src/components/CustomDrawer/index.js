import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth';

export function CustomDrawer(props) {

  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25
        }}
      >
        <Image
          source={require('../../assets/Logo.png')}
          style={{
            width: 85,
            height: 85,
            resizeMode: 'contain'
          }}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            marginTop: 5
          }}
        >
          Bem Vindo
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 17,
            fontWeight: 'bold',
            fontStyle: 'italic',
            paddingBottom: 25,
            textAlign: 'center'
          }}
        >
          {user && user.name}
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        {...props}
        label="Sair do app"
        labelStyle={{
          color: '#e1e1e1',
          fontWeight: 'bold'
        }}
        inactiveBackgroundColor="#c62c36"
        onPress={ () => signOut()}
      />
    </DrawerContentScrollView>
  )
}