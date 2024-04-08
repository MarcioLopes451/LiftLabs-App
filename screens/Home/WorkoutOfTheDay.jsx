import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";

export default function WorkoutOfTheDay() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  const vid = useRef(null);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.workoutContainer}>
        <Text style={styles.title}>Workout Of The Day</Text>
        <Text style={styles.description}>Push Day, Variation 1</Text>
        <Text style={styles.text}>
          Total Push workout plan to get in shape & build a foundation in weight
          training.
        </Text>
        <View style={styles.videoContainer}>
          <Video
            source={require("../../videos/exercisevid.mp4")}
            controls={true}
            resizeMode="contain"
            useNativeControls
            ref={vid}
            style={styles.video}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141619",
    height: 200,
    alignSelf: "stretch",
    paddingTop: 60,
    height: 390,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  workoutContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    color: "#F9C305",
    fontSize: 20,
    fontFamily: "Inter_600SemiBold",
  },
  description: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
    fontFamily: "Inter_600SemiBold",
  },
  text: {
    fontSize: 14,
    opacity: 0.75,
    color: "white",
    fontFamily: "Inter_600SemiBold",
    paddingRight: 10,
    marginTop: 10,
  },
  videoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  video: {
    width: 350,
    height: 200,
    borderRadius: 8,
  },
});
