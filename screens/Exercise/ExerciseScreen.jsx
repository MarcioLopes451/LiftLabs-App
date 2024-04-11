import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Text } from "react-native";
import ExerciseHome from "./ExerciseHome";
import ExerciseSectionScreen from "./ExerciseSectionScreen";
import ExerciseDetail from "./ExerciseDetail";
import Crown from "../../images/8541713_crown_icon.png";

const Stack = createStackNavigator();

export default function ExerciseScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Exercise"
        component={ExerciseHome}
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
