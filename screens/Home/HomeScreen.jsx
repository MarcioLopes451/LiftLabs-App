import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import ExerciseDetail from "../Exercise/ExerciseDetail";

const Stack = createStackNavigator();
export default function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ExerciseDetail"
        component={ExerciseDetail}
        navigation={navigation}
      />
    </Stack.Navigator>
  );
}
