import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function WorkoutSection({ image, title, description }) {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
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
      <View style={{ marginTop: -90 }}>
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
    fontFamily: "Inter_700Bold",
    textAlign: "center",
  },
  forceDesc: {
    fontFamily: "Inter_600SemiBold",
    color: "white",
    textAlign: "center",
    width: 260,
    marginTop: 10,
    fontSize: 15,
  },
});
