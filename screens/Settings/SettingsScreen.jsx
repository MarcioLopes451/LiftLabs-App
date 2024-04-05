import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsHome from "./SettingsHome";

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
    </Stack.Navigator>
  );
}
