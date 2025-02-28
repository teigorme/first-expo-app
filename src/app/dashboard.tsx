import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import Button from "@/components/button";

const Dashboard = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Dashboard</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  title: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Dashboard;
