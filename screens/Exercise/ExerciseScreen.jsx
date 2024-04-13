import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Text, Platform, Pressable } from "react-native";
import ExerciseHome from "./ExerciseHome";
import ExerciseSectionScreen from "./ExerciseSectionScreen";
import ExerciseDetail from "./ExerciseDetail";
import Crown from "../../images/8541713_crown_icon.png";
import { useState } from "react";
import PremiumModal from "../Premium/PremiumModal";

const Stack = createStackNavigator();

export default function ExerciseScreen() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Exercise"
        component={ExerciseHome}
        options={{
          headerTitleAlign: "left",
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
            borderBottomColor: "#404040",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Exercise Section"
        component={ExerciseSectionScreen}
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
                marginBottom: Platform.OS === "ios" ? 10 : 0,
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
                marginBottom: Platform.OS === "ios" ? 10 : 0,
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
