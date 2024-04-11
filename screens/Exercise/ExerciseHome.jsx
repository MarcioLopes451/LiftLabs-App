import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";
import ExerciseFront from "./ExerciseSlides/ExerciseFront";
import ExerciseBack from "./ExerciseSlides/ExerciseBack";
import LeftBtn from "../../images/Vector.png";
import RightBtn from "../../images/Vector-2.png";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";

export default function ExerciseHome({ navigation }) {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  const showFirstComponent = () => {
    setShowComponent1(true);
    setShowComponent2(false);
  };

  const showSecondComponent = () => {
    setShowComponent1(false);
    setShowComponent2(true);
  };

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {showComponent1 && <ExerciseFront navigation={navigation} />}
      {showComponent2 && <ExerciseBack navigation={navigation} />}
      <View style={styles.swipeContainer}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {showComponent1 ? (
            <Text style={styles.text}>Front</Text>
          ) : (
            <Text style={styles.text}>Back</Text>
          )}
          <View style={styles.swipeBtn}>
            <Pressable onPress={showFirstComponent}>
              <Image source={LeftBtn} />
            </Pressable>
            <Pressable onPress={showSecondComponent}>
              <Image source={RightBtn} />
            </Pressable>
          </View>
          <Text style={styles.text}>180°</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2126",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily: "Inter_500Medium",
    fontSize: 17,
    opacity: 0.9,
  },
  swipeContainer: {
    width: 200,
    height: 107,
    backgroundColor: "#141619",
    marginTop: -20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  swipeBtn: {
    alignItems: "center",
    flexDirection: "row",
    gap: 50,
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
