import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from '../services/firebaseConnection';

import { AuthAlert } from '../utils/customAlert';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  async function signUp(email, password, name) {
    setLoadingAuth(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async value => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).set({
        money: 0,
        name: name,
      })
      .then(() => {
        let data = {
          uid: uid,
          name: name,
          email: value.user.email
        };
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      });
    })
    .catch(error => {
      switch (error.message) {
        case 'The email address is badly formatted.':
          AuthAlert('Aviso', 'Este não é um email válido!');
          break;
        case 'The email address is already in use by another account.':
          AuthAlert('Aviso', 'O email já está cadastrado!');
          break;
        case 'Password should be at least 6 characters':
          AuthAlert('Aviso', 'A senha deve ter no mínimo 6 caracteres');
          break;
        default:
          console.log(error.message);
          break;
      }
      setLoadingAuth(false);
    });
  };

  async function signIn(email, password) {
    setLoadingAuth(true);
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async value => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).once('value')
      .then((snapshot) => {
        let data = {
          uid: uid,
          name: snapshot.val().name,
          email: value.user.email
        };
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      });
    })
    .catch(error => {
      switch (error.message) {
        case 'The email address is badly formatted.':
          AuthAlert('Aviso', 'Este não é um email válido!');
          break;
        case 'There is no user record corresponding to this identifier. The user may have been deleted.':
          AuthAlert('Aviso', 'O email não foi cadastro ou foi apagado!');
          break;
        case 'The password is invalid or the user does not have a password.':
          AuthAlert('Atenção', 'A senha está incorreta!');
          break;
        default:
          AuthAlert('Alerta', 'Algo deu errado!');
          break;
      }
      setLoadingAuth(false);
    });
  };

  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  };

  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear()
    .then(() => {
      setUser(null);
    });
  }

  useEffect(() => {
    async function getStorageUser() {
      await AsyncStorage.getItem('Auth_user')
      .then(value => {
        if(value) {
          let data = JSON.parse(value);
          setUser(data);
          setLoading(false);
        };
        setLoading(false);
      });
    };
    getStorageUser();
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        signed: !!user,
        user, 
        signUp, 
        signIn, 
        loading,
        signOut,
        loadingAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
