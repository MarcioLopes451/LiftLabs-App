import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import FrontImg from "../../../images/front img-Photoroom.png";

export default function ExerciseFront() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={FrontImg} style={{ width: 160, height: 538 }} />
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
