import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { 
  Container,
  ButtonMenu
} from "./styles"; 

export function Header() {

  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu
        onPress={() => navigation.toggleDrawer() }
      >
        <Feather
          name="menu"
          size={35}
          color="#FFF"
        />
      </ButtonMenu>
    </Container>
  )
}