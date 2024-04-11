import { StyleSheet, Text, View, Pressable, RadioButton } from "react-native";
import React from "react";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";

export default function Measurements() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.Profilecontainer}>
        <View style={styles.socialContainer}>
          <Text style={styles.text}>Weight & Muscle Size</Text>
          <Pressable style={styles.optionsBox}>
            <Text style={styles.optionsText}>kg/cm</Text>
          </Pressable>
          <Pressable style={styles.optionsBox}>
            <Text style={styles.optionsText}>lb/in</Text>
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
    paddingTop: 20,
  },
  Profilecontainer: {
    width: 378,
    backgroundColor: "#141619",
    borderRadius: 8,
    gap: 20,
    padding: 10,
    marginTop: 30,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontFamily: "Inter_600SemiBold",
  },
  optionsBox: {
    backgroundColor: "#1B2126",
    width: 60,
    height: 60,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  optionsText: {
    fontSize: 14,
    color: "white",
    fontFamily: "Inter_600SemiBold",
  },
});
