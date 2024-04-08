import { View, Text, Image } from "react-native";
import React from "react";
import Crown from "../../images/8541713_crown_icon.png";
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
        name="Settings Home"
        component={SettingsHome}
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
            borderBottomWidth: 1,
            borderBottomColor: "gray",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerTitleStyle: {
            display: "none",
          },
          headerStyle: {
            backgroundColor: "#1B2126",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
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
        name="Measurements"
        component={Measurements}
        options={{
          headerTitleStyle: {
            display: "none",
          },
          headerStyle: {
            backgroundColor: "#1B2126",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
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
        name="WorkoutReminders"
        component={WorkoutReminders}
        options={{
          headerTitleStyle: {
            display: "none",
          },
          headerStyle: {
            backgroundColor: "#1B2126",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
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
