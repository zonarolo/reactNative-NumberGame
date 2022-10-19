import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = () => {
  const [input, setInput] = useState();

  
  const handleInput = () => {
    console.log(input);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Comenzar Juego</Text>
      <Card style={styles.inputContainer}>
        <Text>Elija un numero</Text>
        <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} onChangeText={newInput => setInput(newInput)}
        defaultValue={input}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Limpiar' color={Colors.accent} onPress={() => setInput()} />
          </View>
          <View style={styles.button}>
            <Button title='Confirmar' color={Colors.primary} onPress={handleInput} />
          </View>
        </View>
      </Card>
    </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
    alignItems: 'center',
  },
  button: {
    width: 100
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  input: {
    textAlign: 'center',
    margin: 15,
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
})

export default StartGameScreen;