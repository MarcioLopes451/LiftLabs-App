import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { data } from "../../data/data";
import { useState, useEffect } from "react";
import { Images } from "../../utils/Images";
import { WorkoutImage } from "../../utils/ExerciseImage";
import Line from "../../images/Line 10.png";

export default function WorkoutVariations({ navigation, route }) {
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

  const { primaryMuscles, titles, text } = route.params;

  const exercises = data.filter((exercise) =>
    exercise.primaryMuscles.some((muscle) => primaryMuscles.includes(muscle))
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <WorkoutImage exerciseId={item.id} />
        <Text key={item.id} style={styles.text}>
          {item.name}
        </Text>
      </View>
      <Text style={styles.muscleType}>{item.primaryMuscles}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>{titles}</Text>
        <Text style={styles.titleText}>{text}</Text>
      </View>
      <View style={styles.workoutContainer}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.exerciseDurationText}>Exercises</Text>
            <Text style={styles.exerciseDurationText2}>
              {slicedExercises.length}
            </Text>
          </View>
          <Image source={Line} />
          <View>
            <Text style={styles.exerciseDurationText}>Duration</Text>
            <Text style={styles.exerciseDurationText2}>40-55mins</Text>
          </View>
        </View>
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
    fontWeight: "bold",
    width: 130,
  },
  title: {
    color: "#F9C305",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    fontStyle: "italic",
  },
  titleText: {
    color: "white",
    fontSize: 15,
    textAlign: "left",
    fontWeight: "bold",
    paddingTop: 10,
    width: 238,
    fontStyle: "italic",
  },
  workoutContainer: {
    width: 376,
    backgroundColor: "#141619",
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
  exerciseDurationText: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    textAlign: "center",
  },
  exerciseDurationText2: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#F9C305",
    textAlign: "center",
    marginTop: 5,
  },
  muscleType: {
    color: "#F9C305",
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  titleContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
