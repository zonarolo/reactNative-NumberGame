import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = (props) => {
  const [input, setInput] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const handlerInputNumber = (newInput) => {
    setInput(newInput.replace(/[^0-9]/g, ''))
  }

  const handlerResetInput = () => {
    setInput(0);
    setConfirmed(false);
  };

  const handleInput = () => {
    const chooseNumber = parseInt(input);
    if (!chooseNumber || chooseNumber <= 0 || chooseNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(chooseNumber);
    setInput(0)
    console.log(chooseNumber);
  }

  let confirmedOutput

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text> Tu seleccion:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='Empezar juego' onPress={() => props.onStartGame(selectedNumber)}/>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text>Elija un numero</Text>
          <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} onChangeText={handlerInputNumber}
          defaultValue={input}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Limpiar' color={Colors.accent} onPress={handlerResetInput} />
            </View>
            <View style={styles.button}>
              <Button title='Confirmar' color={Colors.primary} onPress={handleInput} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    width: Dimensions.get('window').width / 4,
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
  },
  summaryContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})

export default StartGameScreen;