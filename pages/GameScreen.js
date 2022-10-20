import React, { useState, useRef, useEffect } from "react";
import { Text, StyleSheet, View, Button, Dimensions } from "react-native";
import Header from "../components/Header";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {
  const [rounds, setRounds] = useState(0);
  const { userOption, onGameOver } = props;

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userOption)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess == userOption) onGameOver(rounds);
  }, [currentGuess, userOption, onGameOver]);

  const handlerNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userOption) ||
      (direction === "higher" && currentGuess > userOption)
    ) {
      Alert.alert("No mientas!", "Tu sabes que no es verdad!", [
        {
          text: "Disculpa!",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(rounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>La suposición del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="MENOR" onPress={handlerNextGuess.bind(this, "lower")} />
        <Button title="MAYOR" onPress={handlerNextGuess.bind(this, "higher")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
