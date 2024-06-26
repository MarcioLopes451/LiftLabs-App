import { View, Text, Image, Platform, Pressable } from "react-native";
import React, { useState } from "react";
import Crown from "../../images/8541713_crown_icon.png";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsHome from "./SettingsHome";
import MyProfile from "./MyProfile";
import Measurements from "./Measurements";
import WorkoutReminders from "./WorkoutReminders";
import PremiumModal from "../Premium/PremiumModal";

const Stack = createStackNavigator();
export default function SettingsScreen() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: route.name === "Settings Home" ? "left" : "center",
        headerTitleStyle:
          route.name === "MyProfile"
            ? { display: "none" }
            : route.name === "Measurements"
            ? { display: "none" }
            : route.name === "WorkoutReminders"
            ? { display: "none" }
            : {},
        headerRight: () => (
          <View>
            <Pressable onPress={openModal}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginRight: 10,
                  marginBottom: Platform.OS === "ios" ? 15 : 0,
                }}
              >
                <Image source={Crown} style={{ width: 25, height: 25 }} />
                <Text style={{ color: "#F9C305", fontWeight: "bold" }}>
                  Premium
                </Text>
              </View>
            </Pressable>
            {modal && <PremiumModal isOpen={modal} onClose={openModal} />}
          </View>
        ),
        headerStyle: {
          backgroundColor: "#1B2126",
          shadowColor: "#404040",
        },
        headerTintColor: "white",
      })}
    >
      <Stack.Screen name="Settings Home" component={SettingsHome} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Measurements" component={Measurements} />
      <Stack.Screen name="WorkoutReminders" component={WorkoutReminders} />
    </Stack.Navigator>
  );
}
