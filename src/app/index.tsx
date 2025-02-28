import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Button from "@/components/button";
import Input from "@/components/input";
import { router } from "expo-router";

const Index = () => {
  const [name, setName] = useState<string>("");

  function handleSendMessage() {
    Alert.alert(`Olá, ${name} seja bem-vindo!`);
  }

  function handleNext() {
    router.navigate("/dashboard");
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Olá, {name}!</Text>
      <Input onChangeText={setName} />
      <Button title="Continuar" onPress={handleSendMessage} />
      <Button title="Dashboard" onPress={handleNext} />
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
