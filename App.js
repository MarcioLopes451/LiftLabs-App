import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Logo from "./images/Liftlabs (1)-cropped 4.png";
import ExerciseImg from "./images/6643367_diet_dumbbells_exercise_fitness_gym_icon.png";
import ProgressImg from "./images/4308198_chart_flowchart_graph_growth_increase_icon.png";
import WorkoutImg from "./images/728933_document_edit_file_page_paper_icon.png";
import SettingsImg from "./images/2849830_multimedia_options_setting_settings_gear_icon.png";
import Crown from "./images/8541713_crown_icon.png";
import { Image, Text, View } from "react-native";
import ExerciseScreen from "./screens/Exercise/ExerciseScreen";
import WorkoutScreen from "./screens/Workout/WorkoutScreen";
import ProgressScreen from "./screens/Progress/ProgressScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";

const Tab = createBottomTabNavigator();

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
          cardStyle: { backgroundColor: "transparent" },
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          }),
          tabBarStyle: {
            backgroundColor: "#141619",
          },
          headerStyle: {
            backgroundColor: "#1B2126",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
          },
          headerTitleStyle: {
            color: "white",
          },
          tabBarActiveTintColor: "#F9C305",
          tabBarInactiveTintColor: "white",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={Logo}
                style={{
                  width: 40,
                  height: 30,
                  tintColor: focused ? null : "white",
                }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Exercises"
          component={ExerciseScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={ExerciseImg}
                style={{
                  width: 40,
                  height: 30,
                  tintColor: focused ? null : "white",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Workout"
          component={WorkoutScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={WorkoutImg}
                style={{
                  width: 40,
                  height: 30,
                  tintColor: focused ? null : "white",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={ProgressScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={ProgressImg}
                style={{
                  width: 40,
                  height: 30,
                  tintColor: focused ? null : "white",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={SettingsImg}
                style={{
                  width: 40,
                  height: 30,
                  tintColor: focused ? null : "white",
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
