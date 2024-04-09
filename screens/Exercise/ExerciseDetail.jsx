import { Text, View, StyleSheet, StatusBar, ScrollView } from "react-native";
import { data } from "../../data/data";
import { useState, useEffect } from "react";
import { Images } from "../../utils/Images";
import { ExerciseDImage } from "../../utils/ExerciseImage";
import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

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

  const formatArrayAsNewLines = (array) => {
    if (!Array.isArray(array)) {
      return "";
    }

    return array.map((element) => `${element}\n\n`).join("");
  };

  const formattedString = formatArrayAsNewLines(exerciseDetail.instructions);

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{exerciseDetail.name}</Text>
          <ExerciseDImage exerciseId={exerciseDetail.id} />
        </View>
        <ScrollView horizontal={true} contentContainerStyle={{ width: 700 }}>
          <View style={[styles.detailContainer, { marginLeft: 30 }]}>
            <Text style={styles.title}>Exercise Details</Text>
            <Text style={styles.text}>
              Level: <Text style={styles.text3}> {exerciseDetail.level} </Text>
            </Text>
            <Text style={styles.text}>
              Force: <Text style={styles.text3}> {exerciseDetail.force} </Text>
            </Text>
            <Text style={styles.text}>
              Primary Muscles:{" "}
              <Text style={styles.text3}>
                {" "}
                {exerciseDetail.primaryMuscles}{" "}
              </Text>
            </Text>
            <Text style={styles.text}>
              Secondary Muscles:{" "}
              {exerciseDetail.secondaryMuscles.length === 0 ? (
                <Text style={styles.text3}> N/A </Text>
              ) : (
                exerciseDetail.secondaryMuscles.map((e) => (
                  <Text key={e.id} style={styles.text3}>
                    {e},
                  </Text>
                ))
              )}
            </Text>
          </View>
          <View style={[styles.detailContainer, { marginLeft: 30 }]}>
            <Text style={styles.title}>Instructions</Text>
            <Text style={styles.text2}>{formattedString}</Text>
          </View>
        </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
  },
  exerciseName: {
    fontSize: 20,
    color: "white",
    fontFamily: "Inter_600SemiBold",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontFamily: "Inter_600SemiBold",
    textAlign: "center",
    paddingTop: 10,
  },
  text: {
    fontSize: 15,
    color: "white",
    fontFamily: "Inter_500Medium",
    marginTop: 10,
    textAlign: "center",
  },
  text2: {
    fontSize: 15,
    color: "white",
    fontFamily: "Inter_500Medium",
    marginTop: 10,
    textAlign: "center",
    padding: 10,
  },
  text3: {
    fontSize: 15,
    color: "#F9C305",
    fontFamily: "Inter_600SemiBold",
  },
  detailContainer: {
    backgroundColor: "#141619",
    width: 300,
    marginTop: 30,
    borderRadius: 10,
    height: "100%",
  },
});
