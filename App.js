import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './pages/StartGameScreen';
import GameScreen from './pages/GameScreen';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import GameOverScreen from './pages/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  //const [loaded] = useFonts({
   // OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
   // OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  //})

  //if (!loaded) return <SplashScreen />

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  }

  const handlerGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const handlerRestart = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  
  let content = <StartGameScreen onStartGame={handlerStartGame} />
  
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userOption={userNumber} onGameOver={handlerGameOver}/>
  } else if (guessRounds > 0) {
    content = <GameOverScreen onRestart={handlerRestart} rounds={guessRounds} choicen={userNumber}/>
  }

  if (userNumber) {
    content = <GameScreen />
  }
  

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header title={'Adivina el numero'} />
      { content }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
