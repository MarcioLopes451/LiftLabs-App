import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutHome from "./WorkoutHome";
import PushDay from "./WorkoutSlides/PushDay";

const Stack = createStackNavigator();

export default function WorkoutScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WorkoutHome"
        component={WorkoutHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="PushDay" component={PushDay} />
    </Stack.Navigator>
  );
}
