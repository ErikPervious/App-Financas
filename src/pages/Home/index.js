import React, { useContext, useState, useEffect } from 'react';
import { Alert, Platform, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import firebase from '../../services/firebaseConnection';
import { format, isBefore } from 'date-fns';

import { HistoryList } from '../../components/HistoryList';
import { DatePicker } from '../../components/DatePicker';
import { AuthContext } from '../../contexts/auth';
import { Header } from '../../components/Header';

import { 
  Background,
  Container,
  Name,
  Balance,
  Title,
  List,
  Area
} from './styles';

export function Home() {
  const [history, setHistory] = useState([]);
  const [money, setMoney] = useState(0);
  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);
  
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;
  
  function handleDelete(data) {
    
    const [dayItem, monthItem, yearItem] = data.date.split('/');
    const dateItem = new Date(`${yearItem}/${monthItem}/${dayItem}`);
    
    const formatTodayDay = format(new Date(), 'dd/MM/yyyy');
    const [dayToday, monthToday, yearToday] = formatTodayDay.split('/');
    const dateToday = new Date(`${yearToday}/${monthToday}/${dayToday}`);
    console.log(dateItem);
    console.log(dateToday);

    if(isBefore(dateItem, dateToday)) {
      alert('voce nao pode apagar um registro antigo');
      return;
    };
    Alert.alert(
      'Cuidado Atenção!',
      `Você deseja excluir ${data.type} - ${data.value}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  };

  async function handleDeleteSuccess(data) {
    await firebase.database().ref('history').child(uid)
    .child(data.key).remove()
    .then(async () => {
      let currentMoney = money;
      data.type === 'despesa' 
      ? currentMoney += parseFloat(data.value)
      : currentMoney -= parseFloat(data.value);
      
      await firebase.database().ref('users').child(uid)
      .child('money').set(currentMoney);
    })
    .catch(error => {
      console.log(error);
    });
  };

  function handleShowPicker() {
    setShow(true);
  };

  function handleClosePicker() {
    setShow(false);
  };

  const onChange = date => {
    setShow(Platform.OS === 'ios');
    setNewDate(date);
  };

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid)
      .on('value', snapshot => {
        setMoney(snapshot.val().money);
      });

      await firebase.database().ref('history').child(uid)
      .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
      .limitToLast(10).on('value', snapshot => {
        setHistory([]);
        snapshot.forEach(childItem => {
          let list = {
            key: childItem.key,
            type: childItem.val().type,
            value: childItem.val().value,
            date: childItem.val().date
          };
          setHistory(oldArray => [...oldArray, list].reverse());
        })
      });
    };
    loadList();
  }, [newDate]);

  return(
    <Background>
      <Header />
      <Container>
        <Name>{user && user.name}</Name>
        <Balance>R${money.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Balance>
      </Container>
      <Area>
        <TouchableOpacity
          onPress={() => handleShowPicker()}
        >
          <MaterialIcons name="event" size={30} color="#FFF"/>
        </TouchableOpacity>
        <Title>Ultimas Movimentações</Title>
      </Area>
      <List
        showsVerticalScrollIndicator={false}
        data={history}
        keyExtractor={item => item.key}
        renderItem={({item}) => <HistoryList data={item} deleteItem={handleDelete} />}
      />
      { show && (
        <DatePicker
          onClose={handleClosePicker}
          onChange={onChange}
          date={newDate}
        />
      )}
    </Background>
  )
}