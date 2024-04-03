import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function YourActivity() {
  return (
    <View style={styles.container}>
      <View style={styles.activityContainerTitle}>
        <Text style={styles.activityContainerText}>Your Activity</Text>
        <Text style={styles.activityContainerText}>This Week</Text>
      </View>

      <View style={styles.activityContainer}>
        <View style={styles.activityContainerBox}>
          <View style={styles.activityContainerBoxText}>
            <Text style={styles.textOne}>1</Text>
            <Text style={styles.textTwo}>Gym Visits</Text>
          </View>
        </View>
        <View style={styles.activityContainerBox}>
          <View style={styles.activityContainerBox}>
            <View style={styles.activityContainerBoxText}>
              <Text style={styles.textOne}>0h 31M</Text>
              <Text style={styles.textTwo}>Workout Time</Text>
            </View>
          </View>
        </View>
        <View style={styles.activityContainerBox}>
          <View style={styles.activityContainerBox}>
            <View style={styles.activityContainerBoxText}>
              <Text style={styles.textOne}>1</Text>
              <Text style={styles.textTwo}>Gym Streaks</Text>
            </View>
          </View>
        </View>
        <View style={styles.activityContainerBox}>
          <View style={styles.activityContainerBox}>
            <View style={styles.activityContainerBoxText}>
              <Text style={styles.textOne}>3</Text>
              <Text style={styles.textTwo}>LiftLabs Workouts</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B2126",
    marginTop: 30,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  activityContainerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activityContainerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  activityContainerBox: {
    width: 170,
    height: 150,
    backgroundColor: "#141619",
  },
  activityContainer: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activityContainerBoxText: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textOne: {
    fontSize: 30,
    color: "#F9C305",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  textTwo: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
