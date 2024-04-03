import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import YourActivity from "./YourActivity";
import History from "./History";
import Achievements from "./Achievements";

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container}>
      <YourActivity />
      <History />
      <Achievements />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2126",
    position: "relative",
  },
});
