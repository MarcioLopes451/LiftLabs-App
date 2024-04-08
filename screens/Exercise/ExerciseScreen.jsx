import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Text, TouchableOpacity } from "react-native";
import ExerciseHome from "./ExerciseHome";
import ExerciseSectionScreen from "./ExerciseSectionScreen";
import ExerciseDetail from "./ExerciseDetail";
import Crown from "../../images/8541713_crown_icon.png";
import BackButton from "../../images/2849832_arrows_navigation_arrow_left_back_icon (3).png";

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
        name="ExerciseSection"
        component={ExerciseSectionScreen}
        options={({ navigation }) => ({
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
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={BackButton} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
          ),
        })}
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
