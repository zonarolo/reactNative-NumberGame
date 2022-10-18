import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Card = props => 
  <View style={{...styles.inputContainer, ...props.style}}>
    {props.children}
  </View>
;

const styles = StyleSheet.create({
  inputContainer: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  }
})

export default Card;