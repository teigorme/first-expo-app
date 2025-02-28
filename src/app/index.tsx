import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello World!</Text>
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
