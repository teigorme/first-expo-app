import { View, Text, StyleSheet, Button, Alert } from "react-native";
import React from "react";

const Index = () => {
  function handleSendMessage() {
    return Alert.alert("Olá, Igor!")
  }
  return (
    <View style={style.container}>
      <Text style={style.title}>Olá, Igor!</Text>
      <Button title="Enviar mensagem" onPress={handleSendMessage}/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
  },
  title: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Index;
