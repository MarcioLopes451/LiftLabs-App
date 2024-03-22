import { Text, View, StyleSheet, Image, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141619",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
