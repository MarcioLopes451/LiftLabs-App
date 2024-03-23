import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import BackImg from "../../../images/back img-Photoroom.png";

export default function ExerciseBack() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={BackImg} style={{ width: 160, height: 538 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2126",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
