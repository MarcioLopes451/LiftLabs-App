import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import ProfileImg from "../../images/115759_camera_icon (1).png";

export default function MyProfile() {
  return (
    <View style={styles.container}>
      <Image source={ProfileImg} />
      <Text style={styles.profileText}>Marcio Lopes</Text>
      <View style={styles.Profilecontainer}>
        <View style={styles.socialContainer}>
          <Text style={styles.text}>Gender</Text>
          <Pressable style={styles.optionsBox}>
            <Text style={styles.optionsText}>Male</Text>
          </Pressable>
        </View>
        <View style={styles.socialContainer}>
          <Text style={styles.text}>Age</Text>
          <Pressable style={styles.optionsBox}>
            <Text style={styles.optionsText}>23</Text>
          </Pressable>
        </View>
        <View style={styles.socialContainer}>
          <Text style={styles.text}>Weight</Text>
          <Pressable style={styles.optionsBox}>
            <Text style={styles.optionsText}>70.0kg</Text>
          </Pressable>
        </View>
        <View style={styles.socialContainer}>
          <Text style={styles.text}>Height</Text>
          <Pressable style={styles.optionsBox}>
            <Text style={styles.optionsText}>175.0cm</Text>
          </Pressable>
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
    paddingTop: 20,
  },
  Profilecontainer: {
    width: 378,
    backgroundColor: "#141619",
    borderRadius: 8,
    gap: 20,
    padding: 10,
    marginTop: 30,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  img: {
    width: 30,
    height: 30,
  },
  profileText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  optionsBox: {
    backgroundColor: "#1B2126",
    width: 120,
    height: 30,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  optionsText: {
    color: "white",
    fontWeight: "bold",
  },
});
