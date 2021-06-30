import React from 'react';
import { StyleSheet, TextInputProps } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

import { maskCurrency } from '../../utils/masks';

interface InputPros extends TextInputProps {
  inputMaskChange: any;
}

const Input: React.FC<InputPros> = ({
  inputMaskChange, ... rest
}) => {
  function hadleChange(text: string) {
    const value = maskCurrency(text);
    inputMaskChange(value);
  }
  return (
    <>
      <TextInput style={styles.input} 
        onChangeText={(text) => hadleChange(text)}
        {... rest} 
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '85%',
    fontSize: 35,
    backgroundColor: '#303030',
    paddingHorizontal: 8,
    paddingVertical: 25,
    color: '#fff',
  },
});

export default Input;