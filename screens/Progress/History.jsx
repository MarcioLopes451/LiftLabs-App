import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.historyText}>History</Text>
      <View style={styles.historyContainer}>
        <View style={styles.historyContainerBox}>
          <Text style={styles.historyWorkoutText}>Morning Workout</Text>
          <View style={styles.historyDateContainer}>
            <Text style={styles.historyDateTextOne}>
              31 minutes | Gym Visit
            </Text>
            <Text style={styles.historyDateTextTwo}>01/04/2024</Text>
          </View>
        </View>
        <View style={styles.historyContainerBox}>
          <Text style={styles.historyWorkoutText}>Evening Workout</Text>
          <View style={styles.historyDateContainer}>
            <Text style={styles.historyDateTextOne}>
              52 minutes | Gym Visit
            </Text>
            <Text style={styles.historyDateTextTwo}>26/03/2024</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B2126",
    marginTop: 100,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  historyText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  historyContainer: {
    gap: 20,
    marginTop: 30,
  },
  historyContainerBox: {
    width: 350,
    height: 90,
    backgroundColor: "#141619",
    borderRadius: 8,
    padding: 10,
  },
  historyWorkoutText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  historyDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  historyDateTextOne: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  historyDateTextTwo: {
    color: "#F9C305",
    fontSize: 16,
    fontWeight: "bold",
  },
});
