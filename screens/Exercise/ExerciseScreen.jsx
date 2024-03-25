import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";
import ExerciseFront from "./ExerciseSlides/ExerciseFront";
import ExerciseBack from "./ExerciseSlides/ExerciseBack";
import LeftBtn from "../../images/Vector.png";
import RightBtn from "../../images/Vector-2.png";
import { createStackNavigator } from "@react-navigation/stack";
import ExerciseHome from "./ExerciseHome";

const Stack = createStackNavigator();

export default function ExerciseScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExerciseHome"
        component={ExerciseHome}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
