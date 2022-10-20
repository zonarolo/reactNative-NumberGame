import React from "react";
import {Text, View, Image, StyleSheet, Button } from 'react-native';
import Card from "../components/Card";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require('../assets/images/game-over-gba9dcdd84_1920.jpg')} />
      <Card style={styles.resultContainer}>
        <Text>Intentos: {props.rounds}</Text>
        <Text>El numero era: {props.choicen}</Text>
      </Card>
      <Button title='Nuevo Juego' onPress={props.onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '80%',
    height: 300,
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default GameOverScreen;