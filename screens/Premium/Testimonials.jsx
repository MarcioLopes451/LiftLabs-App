import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import Stars from "../../images/5star 2.png";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function Testimonials() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.testimonialContainer}>
          <View style={styles.titleSection}>
            <Text style={styles.titleText}>Best Gym Workout App</Text>
            <Text style={styles.titleName}>- John</Text>
          </View>
          <Image source={Stars} style={{ marginTop: 10 }} />
          <Text style={styles.text}>
            I've never felt more motivated and empowered to achieve my fitness
            goals.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  testimonialContainer: {
    backgroundColor: "#2e3439",
    width: 300,
    padding: 15,
    borderRadius: 8,
  },
  titleSection: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  titleText: {
    fontSize: 15,
    color: "white",
    fontFamily: "Inter_600SemiBold",
  },
  titleName: {
    fontSize: 15,
    color: "white",
    fontFamily: "Inter_500Medium",
    opacity: 0.8,
  },
  text: {
    fontSize: 15,
    color: "white",
    fontFamily: "Inter_500Medium",
    marginTop: 10,
  },
});
