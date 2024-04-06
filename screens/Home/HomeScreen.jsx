import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import WorkoutOfTheDay from "./WorkoutOfTheDay";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <WorkoutOfTheDay />
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
  text: {
    color: "white",
  },
});
