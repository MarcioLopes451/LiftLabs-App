import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { data } from "../../data/data";
import { useState, useEffect } from "react";
import { Images } from "../../utils/Images";
import ExerciseImage from "../../utils/ExerciseImage";

const numColumns = 2;
export default function ExerciseSectionScreen({ navigation, route }) {
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

  const { primaryMuscles } = route.params;
  const exercises = data.filter((exercise) =>
    exercise.primaryMuscles.includes(primaryMuscles)
  );

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("ExerciseDetail", { id: item.id })}
      key={item.id}
      style={styles.exerciseContainer}
    >
      <ExerciseImage exerciseId={item.id} />
      <Text key={item.id} style={styles.text}>
        {item.name}
      </Text>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.exerciseTitle}>{primaryMuscles}</Text>
      <View style={{ marginTop: 40 }}>
        <FlatList
          data={exercises}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
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
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 20,
  },
  exerciseContainer: {
    width: 180,
    height: 210,
    backgroundColor: "#141619",
    marginLeft: 10,
    marginBottom: 40,
    display: "flex",
    borderRadius: 10,
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
  exerciseTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    marginTop: 50,
  },
  image: {
    width: 100, // Adjust width and height as needed
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
});
