import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          }),
        }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
