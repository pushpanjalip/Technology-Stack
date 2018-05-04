import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({label, onChangeText, placeholder, secureTextEntry}) => {
  const { containerStyle,textStyle,inputStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>
        {label}
      </Text>
      <TextInput
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={inputStyle}/>
    </View>
  );
}
const styles= {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  inputStyle: {
    flex: 2,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#000',
    fontSize: 18,
    lineHeight: 23
  }
};
export { Input };
