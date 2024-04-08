import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import FrontImg from "../../../images/front img-Photoroom.png";
import YellowCircle from "../../../images/Vector-3.png";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";

export default function ExerciseFront({ navigation }) {
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
        <Image source={FrontImg} style={{ width: 160, height: 538 }} />
        <View
          style={{
            position: "absolute",
            top: 120,
            left: -100,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "shoulders",
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
            <Text style={styles.text}>Shoulders</Text>
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: 180,
            left: -100,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "biceps",
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
            <Text style={styles.text}>Biceps</Text>
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: 300,
            left: -80,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "quadriceps",
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
            <Text style={styles.text}>Quads</Text>
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: 140,
            left: 100,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "chest",
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
            <Text style={styles.text}>Chest</Text>
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: 210,
            left: 80,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Exercise Section", {
                primaryMuscles: "abdominals",
              })
            }
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              width: 175,
            }}
          >
            <Image source={YellowCircle} />
            <Text style={styles.text}>abdominals</Text>
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
