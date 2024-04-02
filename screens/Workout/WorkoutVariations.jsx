import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { data } from "../../data/data";
import { useState, useEffect } from "react";
import { Images } from "../../utils/Images";
import { WorkoutImage } from "../../utils/ExerciseImage";

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
    <Pressable style={styles.exerciseContainer}>
      <WorkoutImage exerciseId={item.id} />
      <Text key={item.id} style={styles.text}>
        {item.name}
      </Text>
      <Text style={styles.text}>{item.primaryMuscles}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.title}>{titles}</Text>
        <Text style={styles.titleText}>{text}</Text>
      </View>
      <View style={styles.workoutContainer}>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ color: "white" }}>Exercises</Text>
            <Text style={{ color: "white" }}>{slicedExercises.length}</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>Duration</Text>
            <Text style={{ color: "white" }}>40-55mins</Text>
          </View>
        </View>
        <ScrollView>
          <View>
            <FlatList
              data={slicedExercises}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2126",
    alignItems: "start",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 20,
    width: 130,
  },
  title: {
    color: "#F9C305",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
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
  },
  exerciseContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

{
  /*<FlatList
          data={exercises}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
        /> */
}
