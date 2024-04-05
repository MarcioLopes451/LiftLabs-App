import { StyleSheet, Text, View, Pressable, Switch } from "react-native";
import React, { useState } from "react";

export default function WorkoutReminders() {
  const [switchStates, setSwitchStates] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const toggleSwitch = (day) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.Profilecontainer}>
        {Object.keys(switchStates).map((day) => (
          <View style={styles.socialContainer} key={day}>
            <View style={styles.socialContainer}>
              <Switch
                trackColor={{ false: "#4F5F6C", true: "#F9C305" }}
                thumbColor={switchStates[day] ? "#4F5F6C" : "#4F5F6C"}
                ios_backgroundColor="#1B2126"
                onValueChange={() => toggleSwitch(day)}
                value={switchStates[day]}
              />
              <Text style={styles.text}>{day}</Text>
            </View>
            <Pressable style={styles.optionsBox}>
              <Text style={styles.optionsText}>18:30</Text>
            </Pressable>
          </View>
        ))}
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
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  profileText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 20,
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
    color: "white",
    fontWeight: "bold",
  },
});
