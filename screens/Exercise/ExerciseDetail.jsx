import { Text, View, StyleSheet, StatusBar, ScrollView } from "react-native";
import { data } from "../../data/data";
import { useState, useEffect } from "react";
import { Images } from "../../utils/Images";
import { ExerciseDImage } from "../../utils/ExerciseImage";

export default function ExerciseDetail({ route }) {
  const [imagePaths, setImagePaths] = useState({});

  useEffect(() => {
    const paths = {};
    data.forEach((exercise) => {
      if (exercise.images && exercise.images.length > 0) {
        paths[exercise.id] = Images[exercise.id];
      }
    });
    setImagePaths(paths);
  }, []);

  const { id } = route.params;
  const exerciseDetail = data.find((exercise) => exercise.id === id);
  if (!exerciseDetail) throw new Error(`404: exercise not found: ${id}`);

  const breakSentences = (text) => {
    if (typeof text !== "string") {
      return "";
    }
    // Replace full stops with full stop followed by newline
    return text.replace(/\. /g, ".\n");
  };

  const brokenSentences = breakSentences(exerciseDetail.instructions);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <View style={styles.exerciseContainer}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {exerciseDetail.name}
          </Text>
          <ExerciseDImage exerciseId={exerciseDetail.id} />
          <View style={styles.detailContainer}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 10,
              }}
            >
              Exercise Details
            </Text>
            <Text style={styles.text}>Level: {exerciseDetail.level}</Text>
            <Text style={styles.text}>Force: {exerciseDetail.force}</Text>
            <Text style={styles.text}>
              Primary Muscles: {exerciseDetail.primaryMuscles}
            </Text>
            <Text style={styles.text}>
              Secondary Muscles:{" "}
              {exerciseDetail.secondaryMuscles.map((e) => (
                <Text key={e.id}>{e},</Text>
              ))}
            </Text>
          </View>
          <View style={styles.detailContainer}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 10,
              }}
            >
              Instructions
            </Text>
            <Text style={styles.text2}>{exerciseDetail.instructions}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2126",
    alignItems: "center",
  },
  exerciseContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  text2: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    padding: 10,
  },

  detailContainer: {
    backgroundColor: "#141619",
    width: 300,
    marginTop: 30,
  },
});
