import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function WorkoutSection({ image, title, description }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={{ width: 400, height: 300 }} />
        <LinearGradient
          colors={["#00000000", "#1B2126"]}
          locations={[0.5, 0.8]}
          style={{ ...StyleSheet.absoluteFillObject }}
        />
      </View>
      <View style={{ marginTop: -70 }}>
        <Text style={styles.forceTitle}>{title} WORKOUTS</Text>
        <Text style={styles.forceDesc}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2126",
    alignItems: "center",
  },
  forceTitle: {
    fontSize: 25,
    color: "#F9C305",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
  forceDesc: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    textAlign: "center",
    width: 260,
    marginTop: 10,
    fontSize: 15,
  },
});
