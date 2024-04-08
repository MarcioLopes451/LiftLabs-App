import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import WorkoutSection from "../WorkoutSection";
import LegDayImg from "../../../images/AdobeStock_536898291.jpeg";
import Variations from "../Variations";

export default function LegDay({ navigation }) {
  return (
    <>
      <WorkoutSection
        image={LegDayImg}
        title={"LEG DAY"}
        description={
          "With unlimited variations to this workout plan you can easily maintain your training"
        }
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ gap: 30 }}>
          <Pressable
            onPress={() =>
              navigation.navigate("Workout Variation", {
                primaryMuscles: ["quadriceps", "hamstrings", "calves"],
                titles: "LEG DAY VARIATION 1",
                text: "Total Leg workout plan to get in shape & build a foundation in weight training.",
              })
            }
          >
            <Variations text={"1"} />
          </Pressable>

          <Pressable
            onPress={() =>
              navigation.navigate("Workout Variation", {
                primaryMuscles: ["quadriceps", "hamstrings", "glutes"],
                titles: "LEG DAY VARIATION 2",
                text: "Total Leg workout plan to get in shape & build a foundation in weight training.",
              })
            }
          >
            <Variations text={"2"} />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate("Workout Variation", {
                primaryMuscles: [
                  "quadriceps",
                  "hamstrings",
                  "glutes",
                  "calves",
                ],
                titles: "LEG DAY VARIATION 3",
                text: "Total Leg workout plan to get in shape & build a foundation in weight training.",
              })
            }
          >
            <Variations text={"3"} />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate("Workout Variation", {
                primaryMuscles: ["quadriceps", "hamstrings"],
                titles: "LEG DAY VARIATION 4",
                text: "Total Leg workout plan to get in shape & build a foundation in weight training.",
              })
            }
          >
            <Variations text={"4"} />
          </Pressable>
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
});
