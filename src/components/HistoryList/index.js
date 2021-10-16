import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

import { 
  Container,
  Type,
  IconView,
  TextType,
  TextValue
} from "./styles";

export function HistoryList({ data, deleteItem }) {
  return (
    <TouchableWithoutFeedback
      onLongPress={() => deleteItem(data)}
    >
      <Container>
        <Type>
          <IconView type={data.type} >
            <Feather
              name={data.type === 'despesa' ? "arrow-down" : "arrow-up"}
              size={20}
              color="#FFF"
            />
            <TextType>{data.type}</TextType>
          </IconView>
        </Type>
        <TextValue>R$ {data.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</TextValue>
      </Container>
    </TouchableWithoutFeedback>
  )
}