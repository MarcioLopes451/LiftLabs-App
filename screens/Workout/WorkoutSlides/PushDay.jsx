import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import WorkoutSection from "../WorkoutSection";
import PushDayImg from "../../../images/AdobeStock_331562231.jpeg";
import Variations from "../Variations";

export default function PushDay({ navigation }) {
  return (
    <>
      <WorkoutSection
        image={PushDayImg}
        title={"PUSH DAY"}
        description={
          "With unlimited variations to this workout plan you can easily maintain your training"
        }
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ gap: 30 }}>
          <Pressable
            onPress={() =>
              navigation.navigate("WorkoutVariation", {
                primaryMuscles: ["chest", "triceps"],
                titles: "PUSH DAY VARIATION 1",
                text: "Total Push workout plan to get in shape & build a foundation in weight training.",
              })
            }
          >
            <Variations text={"1"} />
          </Pressable>

          <Variations text={"2"} />
          <Variations text={"3"} />
          <Variations text={"4"} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2126",
    alignItems: "center",
    paddingTop: 10,
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
