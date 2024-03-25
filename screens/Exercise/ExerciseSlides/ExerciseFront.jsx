import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import FrontImg from "../../../images/front img-Photoroom.png";
import YellowCircle from "../../../images/Vector-3.png";

export default function ExerciseFront() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image source={FrontImg} style={{ width: 160, height: 538 }} />
        <View
          style={{
            position: "absolute",
            top: 120,
            left: -100,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            width: 130,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Shoulders</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 180,
            left: -100,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            width: 130,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Biceps</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 300,
            left: -80,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            width: 130,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Quads</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 140,
            left: 100,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: 120,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Chest</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 210,
            left: 80,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: 175,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>abdominal</Text>
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
    fontSize: 20,
  },
  imageContainer: {
    position: "relative",
  },
});
