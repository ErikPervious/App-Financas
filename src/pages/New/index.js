import React, { useContext, useState } from 'react';
import { 
  SafeAreaView ,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import firebase from '../../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native'; 
import { AuthContext } from '../../contexts/auth';
import { format } from 'date-fns';

import { Header } from '../../components/Header';
import { Picker } from '../../components/Picker/index.android';

import { 
  Background,
  Input,
  SubmitButton,
  SubmitText
} from './styles';

export function New() {
  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');

  const navigation = useNavigation();
  const { user: userData } = useContext(AuthContext);

  function handleSubmit() {
    Keyboard.dismiss();
    if(isNaN(parseFloat(value)) || type === null) {
      alert('Preencha os campos!');
      return;
    };

    Alert.alert(
      'Confirmando Dados',
      `Tipo: ${type} - Valor: ${parseFloat(value)}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Continuar', onPress: () => handleAdd() }
      ]
    );
  };

  async function handleAdd() {
    let uid = userData.uid;
    let key = await firebase.database().ref('history').child(uid).push().key;
    await firebase.database().ref('history').child(uid).child(key).set({
      type: type,
      value: parseFloat(value),
      date: format(new Date(), 'dd/MM/yyyy')
    });

    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let money = parseFloat(snapshot.val().money);

      type === 'despesa' ? money -= parseFloat(value)
      : money += parseFloat(value);

      user.child('money').set(money);
    });
    Keyboard.dismiss();
    setValue('');
    navigation.navigate('Home');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header />
        <SafeAreaView style={{alignItems: 'center'}}>
          <Input
            value={value}
            onChangeText={v => setValue(v)}
            placeholder="Valor desejado"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
          <Picker
            onChange={setType}
            type={type}
          />
          <SubmitButton onPress={() => handleSubmit()} >
            <SubmitText>REGISTRAR</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  )
}