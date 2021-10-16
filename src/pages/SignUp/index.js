import React, { useContext, useState, useRef } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton, 
  SubmitText,
  ButtonSecurePassword
} from '../SignIn/styles';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordSecure, setPasswordSecure] = useState(true);

  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp() {
    if(name === '') {
      inputNameRef.current.focus();
      return;
    } else if(email === '') {
      inputEmailRef.current.focus();
      return;
    } else if(password === '') {
      inputPasswordRef.current.focus();
      return;
    }


    signUp(email, password, name);
  };

  return(
    <Background
      style={{
        borderTopWidth: 1,
        borderTopColor: '#00b94a',
      }}
    >
      <Container
        behavior={Platform.OS === 'ios' ? 'padding': ''}
        enabled
      >
        <AreaInput>
          <Input
            ref={inputNameRef}
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={v => setName(v)}
          />
        </AreaInput>
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
        <SubmitButton onPress={() => handleSignUp()}>
          { loadingAuth 
            ? <ActivityIndicator size={30} color="#292929" />
            : <SubmitText>Cadastrar</SubmitText>
          }
        </SubmitButton>
      </Container>
    </Background>
  )
}