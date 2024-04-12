import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import ExerciseDetail from "../Exercise/ExerciseDetail";
import { View, Text, Image, Platform } from "react-native";
import Crown from "../../images/8541713_crown_icon.png";

const Stack = createStackNavigator();
export default function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ExerciseDetail"
        component={ExerciseDetail}
        navigation={navigation}
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
