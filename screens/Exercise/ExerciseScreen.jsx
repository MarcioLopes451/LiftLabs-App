import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";
import ExerciseFront from "./ExerciseSlides/ExerciseFront";
import ExerciseBack from "./ExerciseSlides/ExerciseBack";
import LeftBtn from "../../images/Vector.png";
import RightBtn from "../../images/Vector-2.png";
export default function ExerciseScreen() {
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
  return (
    <View style={styles.container}>
      {showComponent1 && <ExerciseFront />}
      {showComponent2 && <ExerciseBack />}
      <View style={styles.swipeContainer}>
        <Text style={styles.text}>Swipe</Text>
        <View style={styles.swipeBtns}>
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
  },
  swipeContainer: {
    width: 200,
    height: 107,
    backgroundColor: "#141619",
    marginTop: -20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  swipeBtns: {
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },
});
