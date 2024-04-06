import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";

export default function WorkoutOfTheDay() {
  const vid = useRef(null);
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
    paddingTop: 80,
    height: 430,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  workoutContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    color: "#F9C305",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    opacity: 0.6,
    color: "white",
    fontWeight: "bold",
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
