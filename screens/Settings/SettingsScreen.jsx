import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsHome from "./SettingsHome";
import MyProfile from "./MyProfile";
import Measurements from "./Measurements";
import WorkoutReminders from "./WorkoutReminders";

const Stack = createStackNavigator();
export default function SettingsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsHome"
        component={SettingsHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Measurements" component={Measurements} />
      <Stack.Screen name="WorkoutReminders" component={WorkoutReminders} />
    </Stack.Navigator>
  );
}
