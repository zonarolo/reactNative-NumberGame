import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './pages/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header title={'Adivina el numero'} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
