import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { Header } from '../../components/Header';

import {
  Container,
  Name,
  NewLink,
  NewText,
  Logout,
  LogoutText
} from './styles';

export function Profile() {

  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();


  return (
    <Container>
      <Header />
      <Name>
        { user && user.name }
      </Name>
      <NewLink
        onPress={() => {
          navigation.navigate('Registrar');
        }}
      >
        <NewText>REGISTRAR GASTOS</NewText>
      </NewLink>
      <Logout
        onPress={() => {
          signOut();
        }}
      >
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  )
}