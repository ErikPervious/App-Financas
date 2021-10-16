import React from "react";
import { Picker as PickerSelect } from '@react-native-picker/picker';

import { PickerView } from "./styles";

export function Picker({ onChange, type }) {
  return (
    <PickerView>
      <PickerSelect
        style={{
          width: '100%',
          height: 50
        }}
        selectedValue={type}
        onValueChange={ (value) => onChange(value) }
      >
        <PickerSelect.Item label="Receita" value="receita" />
        <PickerSelect.Item label="Despesa" value="despesa" />
      </PickerSelect>
    </PickerView>
  )
}