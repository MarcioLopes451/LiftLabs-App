import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import BackImg from "../../../images/back img-Photoroom.png";
import YellowCircle from "../../../images/Vector-3.png";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";

export default function ExerciseBack({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image source={BackImg} style={{ width: 160, height: 538 }} />
        <View
          style={{
            position: "absolute",
            top: 80,
            left: -70,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "traps",
              })
            }
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              width: 130,
            }}
          >
            <Image source={YellowCircle} />
            <Text style={styles.text}>Traps</Text>
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: 160,
            left: -100,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "triceps",
              })
            }
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              width: 130,
            }}
          >
            <Image source={YellowCircle} />
            <Text style={styles.text}>Triceps</Text>
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: 250,
            left: -70,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            width: 130,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "glutes",
              })
            }
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              width: 130,
            }}
          >
            <Image source={YellowCircle} />
            <Text style={styles.text}>Glutes</Text>
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: 370,
            left: -70,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            width: 130,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "calves",
              })
            }
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              width: 130,
            }}
          >
            <Image source={YellowCircle} />
            <Text style={styles.text}>Calves</Text>
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: 120,
            left: 100,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: 120,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "lats",
              })
            }
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              width: 120,
            }}
          >
            <Image source={YellowCircle} />
            <Text style={styles.text}>Lats</Text>
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: 180,
            left: 80,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: 185,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "lower back",
              })
            }
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              width: 185,
            }}
          >
            <Image source={YellowCircle} />
            <Text style={styles.text}>Lower Back</Text>
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: 300,
            left: 100,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: 160,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "hamstrings",
              })
            }
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              width: 160,
            }}
          >
            <Image source={YellowCircle} />
            <Text style={styles.text}>Hamstrings</Text>
          </Pressable>
        </View>
      </View>
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
    fontSize: 17,
    fontFamily: "Inter_500Medium",
    opacity: 0.9,
  },
  imageContainer: {
    position: "relative",
  },
});
