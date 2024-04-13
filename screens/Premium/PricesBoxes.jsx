import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function PriceBoxes({ text, style, price, subtext }) {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.container, style]}>
      <View style={styles.variationContainer}>
        <View>
          <Text style={[styles.text, style]}>{text}</Text>
          <Text style={subtext}>{subtext}</Text>
        </View>
        <Text style={styles.text}>{price}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141619",
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    borderColor: "white",
    borderWidth: 2,
    height: 60,
  },
  variationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontFamily: "Inter_600SemiBold",
  },
  subtext: {
    fontFamily: "Inter_500Medium",
    fontSize: 15,
  },
});
