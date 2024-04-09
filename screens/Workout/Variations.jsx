import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Line from "../../images/Line 9.png";
import Arrow from "../../images/2849832_arrows_navigation_arrow_left_back_icon (1) 1.png";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function Variations({ text }) {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.variationContainer}>
        <View style={styles.variationText}>
          <Image source={Line} />
          <Text style={styles.text}>Variation {text}</Text>
        </View>
        <Image source={Arrow} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 378,
    height: 73,
    backgroundColor: "#141619",
    borderRadius: 8,
  },
  variationContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
    paddingLeft: 10,
    justifyContent: "space-between",
    paddingRight: 10,
  },
  variationText: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 10,
  },
  text: {
    fontSize: 24,
    color: "#F9C305",
    fontFamily: "Inter_700Bold",
  },
});
