import React, { useState, useContext, useRef } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton, 
  SubmitText,
  Link,
  LinkText,
  ButtonSecurePassword
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordSecure, setPasswordSecure] = useState(true);

  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);

  const { signIn, loadingAuth } = useContext(AuthContext);

  const navigation = useNavigation();

  function navigateToSignUp() {
    navigation.navigate('SignUp')
  };

  function handleSignIn() {
    if(email === '') {
      inputEmailRef.current.focus();
      return;
    } else if(password === '') {
      inputPasswordRef.current.focus();
      return;
    }

    signIn(email, password);
  };

  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding': ''}
        enabled
      >
        <Logo
          source={require('../../assets/Logo.png')}
        />
        <AreaInput>
          <Input
            ref={inputEmailRef}
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={v => setEmail(v)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            ref={inputPasswordRef}
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={v => setPassword(v)}
            secureTextEntry={passwordSecure}
          />
          <ButtonSecurePassword
            onPress={() => {
              setPasswordSecure(passwordSecure ? false : true)
            }}
          >
            <Feather
              name={passwordSecure ? 'eye' : 'eye-off'}
              size={20}
              color="white"
            />
          </ButtonSecurePassword>
        </AreaInput>
        <SubmitButton onPress={() => handleSignIn()}>
          { loadingAuth 
            ? <ActivityIndicator size={30} color="#292929" />
            : <SubmitText>Acessar</SubmitText>
          }
        </SubmitButton>
        <Link
          onPress={() => navigateToSignUp()}
        >
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  )
}