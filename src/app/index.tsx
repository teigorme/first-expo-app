import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import Button from "@/components/button";
import Input from "@/components/input";

const Index = () => {
  function handleSendMessage() {
    Alert.alert("Olá, Igor, seja bem-vindo!");
  }
  return (
    <View style={style.container}>
      <Text style={style.title}>Olá, Igor!</Text>
      <Input onChangeText={(text)=>console.log(text)}/>
      <Button title="Continuar" onPress={handleSendMessage} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Index;
