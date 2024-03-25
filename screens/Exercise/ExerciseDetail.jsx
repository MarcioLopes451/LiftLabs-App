import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import data from "../../data/data.json";

export default function ExerciseDetail({ route }) {
  const { id } = route.params;
  const exerciseDetail = data.find((exercise) => exercise.id === id);
  if (!exerciseDetail) throw new Error(`404: exercise not found: ${id}`);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Exercise Detail</Text>
      <Text style={styles.text}>{exerciseDetail.name}</Text>
      <Text style={styles.text}>{exerciseDetail.level}</Text>
      <Text style={styles.text}>{exerciseDetail.force}</Text>
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
