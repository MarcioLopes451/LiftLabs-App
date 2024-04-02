import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import WorkoutSection from "../WorkoutSection";
import PullDayImg from "../../../images/AdobeStock_320459521.jpeg";
import Variations from "../Variations";

export default function PullDay({ navigation }) {
  return (
    <>
      <WorkoutSection
        image={PullDayImg}
        title={"PULL DAY"}
        description={
          "With unlimited variations to this workout plan you can easily maintain your training"
        }
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ gap: 30 }}>
          <Pressable
            onPress={() =>
              navigation.navigate("WorkoutVariation", {
                primaryMuscles: ["lats", "biceps"],
                titles: "PULL DAY VARIATION 1",
                text: "Total Pull workout plan to get in shape & build a foundation in weight training.",
              })
            }
          >
            <Variations text={"1"} />
          </Pressable>

          <Pressable
            onPress={() =>
              navigation.navigate("WorkoutVariation", {
                primaryMuscles: ["lats", "biceps", "traps", "lower back"],
                titles: "PULL DAY VARIATION 2",
                text: "Total Pull workout plan to get in shape & build a foundation in weight training.",
              })
            }
          >
            <Variations text={"2"} />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate("WorkoutVariation", {
                primaryMuscles: ["lats", "traps", "lower back"],
                titles: "PULL DAY VARIATION 3",
                text: "Total Pull workout plan to get in shape & build a foundation in weight training.",
              })
            }
          >
            <Variations text={"3"} />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate("WorkoutVariation", {
                primaryMuscles: ["lats", "biceps", "traps"],
                titles: "PULL DAY VARIATION 4",
                text: "Total Pull workout plan to get in shape & build a foundation in weight training.",
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
