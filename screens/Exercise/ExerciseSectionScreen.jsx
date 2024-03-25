import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import data from "../../data/data.json";

export default function ExerciseSectionScreen({ navigation, route }) {
  //const [imagePaths, setImagePaths] = useState([]);

  const { primaryMuscles } = route.params;
  const exercises = data
    .filter((exercise) => exercise.primaryMuscles.includes(primaryMuscles))
    .slice(1, 16);

  const renderItem = ({ item }) => (
    <Text key={item.id} style={styles.text}>
      {item.name}
    </Text>
  );
  return (
    <View style={styles.container}>
      {exercises.map((exercise) => (
        <Pressable
          onPress={() =>
            navigation.navigate("ExerciseDetail", { id: exercise.id })
          }
        >
          <Text key={exercise.id} style={styles.text}>
            {exercise.name}
          </Text>
        </Pressable>
      ))}
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
