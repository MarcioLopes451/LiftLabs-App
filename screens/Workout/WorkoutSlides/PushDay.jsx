import { View, Text, StyleSheet } from "react-native";
import React from "react";
import WorkoutSection from "../WorkoutSection";
import PushDayImg from "../../../images/AdobeStock_331562231.jpeg";

export default function PushDay() {
  return (
    <View style={styles.container}>
      <WorkoutSection
        image={PushDayImg}
        title={"PUSH DAY"}
        description={
          "With unlimited variations to this workout plan you can easily maintain your training"
        }
      />
      <View style={{ marginTop: 30 }}>
        <Text style={{ color: "white" }}>DGD</Text>
      </View>
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
