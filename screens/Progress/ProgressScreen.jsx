import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import YourActivity from "./YourActivity";
import History from "./History";

const Stack = createStackNavigator();
export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <YourActivity />
      <History />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2126",
  },
});
