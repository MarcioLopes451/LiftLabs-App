import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import LegDayImg from "../../images/AdobeStock_536898291.jpeg";
import PushDayImg from "../../images/AdobeStock_331562231.jpeg";
import PullDayImg from "../../images/AdobeStock_320459521.jpeg";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function WorkoutHome({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ display: "flex", gap: 36, marginTop: 42 }}
      >
        <Pressable onPress={() => navigation.navigate("Push Day")}>
          <View style={styles.workoutContainer}>
            <Image source={PushDayImg} style={{ width: 350, height: 175 }} />
            <View style={styles.forceContainer}>
              <Text style={styles.forceTitle}>PUSH DAY</Text>
              <Text style={styles.forceDesc}>Chest & Triceps Workouts</Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Pull Day")}>
          <View style={styles.workoutContainer}>
            <Image source={PullDayImg} style={{ width: 350, height: 175 }} />
            <View style={styles.forceContainer}>
              <Text style={styles.forceTitle}>PULL DAY</Text>
              <Text style={styles.forceDesc}>Back & Biceps Workouts</Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Leg Day")}>
          <View style={styles.workoutContainer}>
            <Image source={LegDayImg} style={{ width: 350, height: 175 }} />
            <View style={styles.forceContainer}>
              <Text style={styles.forceTitle}>LEG DAY</Text>
              <Text style={styles.forceDesc}>Leg Workouts</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
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
  workoutContainer: {
    position: "relative",
  },
  forceContainer: {
    position: "absolute",
    top: 100,
    left: 10,
  },
  forceTitle: {
    fontSize: 25,
    color: "#F9C305",
    fontFamily: "Inter_700Bold",
  },
  forceDesc: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "italic",
    color: "white",
  },
});
