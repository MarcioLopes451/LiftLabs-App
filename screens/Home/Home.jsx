import { StyleSheet, View, StatusBar } from "react-native";
import React from "react";
import WorkoutOfTheDay from "./WorkoutOfTheDay";
import TodayWorkouts from "./TodayWorkouts";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <WorkoutOfTheDay />
      <TodayWorkouts navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2126",
    alignItems: "start",
    zIndex: 9,
  },
});
