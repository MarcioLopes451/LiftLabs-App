import { View, Image, Text, Platform, Pressable } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Crown from "../../images/8541713_crown_icon.png";
import WorkoutHome from "./WorkoutHome";
import PushDay from "./WorkoutSlides/PushDay";
import WorkoutVariations from "./WorkoutVariations";
import ExerciseDetail from "../Exercise/ExerciseDetail";
import PullDay from "./WorkoutSlides/PullDay";
import LegDay from "./WorkoutSlides/LegDay";
import PremiumModal from "../Premium/PremiumModal";

const Stack = createStackNavigator();

export default function WorkoutScreen() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: route.name === "Workout Home" ? "left" : "center",
        headerTitleStyle:
          route.name === "Push Day"
            ? { display: "none" }
            : route.name === "Pull Day"
            ? { display: "none" }
            : route.name === "Leg Day"
            ? { display: "none" }
            : route.name === "Workout Variation"
            ? { display: "none" }
            : route.name === "ExerciseDetail"
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
      <Stack.Screen name="Workout Home" component={WorkoutHome} />
      <Stack.Screen name="Push Day" component={PushDay} />
      <Stack.Screen name="Pull Day" component={PullDay} />
      <Stack.Screen name="Leg Day" component={LegDay} />
      <Stack.Screen name="Workout Variation" component={WorkoutVariations} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
    </Stack.Navigator>
  );
}
