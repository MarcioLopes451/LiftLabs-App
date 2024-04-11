import { View, Image, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Crown from "../../images/8541713_crown_icon.png";
import WorkoutHome from "./WorkoutHome";
import PushDay from "./WorkoutSlides/PushDay";
import WorkoutVariations from "./WorkoutVariations";
import ExerciseDetail from "../Exercise/ExerciseDetail";
import PullDay from "./WorkoutSlides/PullDay";
import LegDay from "./WorkoutSlides/LegDay";

const Stack = createStackNavigator();

export default function WorkoutScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Workout Home"
        component={WorkoutHome}
        options={{
          headerTitleAlign: "left",
          headerRight: () => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginRight: 10,
                marginBottom: 10,
              }}
            >
              <Image source={Crown} style={{ width: 25, height: 25 }} />
              <Text style={{ color: "#F9C305", fontWeight: "bold" }}>
                Premium
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#1B2126",
            borderBottomColor: "#404040",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Push Day"
        component={PushDay}
        options={{
          headerTitleStyle: {
            display: "none",
          },
          headerStyle: {
            backgroundColor: "#1B2126",
            borderBottomColor: "#404040",
          },
          headerTintColor: "white",
          headerRight: () => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginRight: 10,
                marginBottom: 10,
              }}
            >
              <Image source={Crown} style={{ width: 25, height: 25 }} />
              <Text style={{ color: "#F9C305", fontWeight: "bold" }}>
                Premium
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Pull Day"
        component={PullDay}
        options={{
          headerTitleStyle: {
            display: "none",
          },
          headerStyle: {
            backgroundColor: "#1B2126",
            borderBottomColor: "#404040",
          },
          headerTintColor: "white",
          headerRight: () => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginRight: 10,
                marginBottom: 10,
              }}
            >
              <Image source={Crown} style={{ width: 25, height: 25 }} />
              <Text style={{ color: "#F9C305", fontWeight: "bold" }}>
                Premium
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Leg Day"
        component={LegDay}
        options={{
          headerTitleStyle: {
            display: "none",
          },
          headerStyle: {
            backgroundColor: "#1B2126",
            borderBottomColor: "#404040",
          },
          headerTintColor: "white",
          headerRight: () => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginRight: 10,
                marginBottom: 10,
              }}
            >
              <Image source={Crown} style={{ width: 25, height: 25 }} />
              <Text style={{ color: "#F9C305", fontWeight: "bold" }}>
                Premium
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Workout Variation"
        component={WorkoutVariations}
        options={{
          headerTitleStyle: {
            display: "none",
          },
          headerStyle: {
            backgroundColor: "#1B2126",
            borderBottomColor: "#404040",
          },
          headerTintColor: "white",
          headerRight: () => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginRight: 10,
                marginBottom: 10,
              }}
            >
              <Image source={Crown} style={{ width: 25, height: 25 }} />
              <Text style={{ color: "#F9C305", fontWeight: "bold" }}>
                Premium
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ExerciseDetail"
        component={ExerciseDetail}
        options={{
          headerTitleStyle: {
            display: "none",
          },
          headerStyle: {
            backgroundColor: "#1B2126",
            borderBottomColor: "#404040",
          },
          headerTintColor: "white",
          headerRight: () => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginRight: 10,
                marginBottom: 10,
              }}
            >
              <Image source={Crown} style={{ width: 25, height: 25 }} />
              <Text style={{ color: "#F9C305", fontWeight: "bold" }}>
                Premium
              </Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
