import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import BackImg from "../../../images/back img-Photoroom.png";
import YellowCircle from "../../../images/Vector-3.png";

export default function ExerciseBack() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image source={BackImg} style={{ width: 160, height: 538 }} />
        <View
          style={{
            position: "absolute",
            top: 80,
            left: -70,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            width: 130,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Traps</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 160,
            left: -100,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            width: 130,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Triceps</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 250,
            left: -70,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            width: 130,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Glutes</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 370,
            left: -70,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            width: 130,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Calves</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 120,
            left: 100,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: 120,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Lats</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 180,
            left: 80,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: 185,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Lower Back</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 300,
            left: 100,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: 160,
          }}
        >
          <Image source={YellowCircle} />
          <Text style={styles.text}>Hamstrings</Text>
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
