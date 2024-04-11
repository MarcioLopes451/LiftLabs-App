import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Arrow from "../../images/2849832_arrows_navigation_arrow_left_back_icon (1) 1.png";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";

export default function SettingLinks({ text, img }) {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.variationContainer}>
        <View style={styles.variationText}>
          <Image source={img} style={styles.img} />
          <Text style={styles.text}>{text}</Text>
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
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
    color: "white",
    fontFamily: "Inter_600SemiBold",
  },
  img: {
    width: 30,
    height: 30,
  },
});
