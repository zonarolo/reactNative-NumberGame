import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = props => {

  return (
    <View style={styles.container}>
      <Text style={styles.number}>
        {props.children}
      </Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'gray',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    alignItemsu: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.accent,
    
  }
})

export default NumberContainer;