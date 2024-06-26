import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { data } from "../../data/data";
import { useState, useEffect } from "react";
import { Images } from "../../utils/Images";
import { WorkoutImage } from "../../utils/ExerciseImage";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";

export default function TodayWorkouts({ navigation }) {
  const [imagePaths, setImagePaths] = useState({});

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  useEffect(() => {
    const paths = {};
    data.forEach((exercise) => {
      if (exercise.images && exercise.images.length > 0) {
        paths[exercise.id] = Images[exercise.id];
      }
    });
    setImagePaths(paths);
  }, []);

  const exercises = data.filter((exercise) =>
    exercise.primaryMuscles.includes("chest")
  );

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const shuffledExercises = shuffleArray(exercises);
  const slicedExercises = shuffledExercises.slice(0, 6);

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.exerciseContainer}
      onPress={() => navigation.navigate("ExerciseDetail", { id: item.id })}
    >
      <View style={styles.titleContainer}>
        <WorkoutImage exerciseId={item.id} />
        <Text key={item.id} style={styles.text}>
          {item.name}
        </Text>
      </View>
      <Text style={styles.muscleType}>{item.primaryMuscles}</Text>
    </Pressable>
  );
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}></View>
      <View style={styles.workoutContainer}>
        <FlatList
          data={slicedExercises}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2126",
    alignItems: "start",
    paddingLeft: 7,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
    width: 130,
  },
  workoutContainer: {
    width: 376,
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    borderRadius: 8,
    height: 450,
    paddingBottom: 10,
  },
  exerciseContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 50,
    marginTop: 20,
    flex: 1,
  },
  muscleType: {
    color: "#F9C305",
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
