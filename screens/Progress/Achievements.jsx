import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import AchievementsLogo from "../../images/5519111_achievement_air forces_army_awards_badge_icon.png";
import AchievementsModal from "./AchievementsModal";

export default function Achievements() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.achievementsContainer}>
        <Text style={styles.achievementsText}>Achievements</Text>
        <View>
          <Pressable onPress={openModal}>
            <Image source={AchievementsLogo} style={styles.img} />
            <Text style={styles.text}>First of Many</Text>
          </Pressable>
        </View>
      </View>
      {modal && <AchievementsModal isOpen={modal} onClose={openModal} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B2126",
    paddingLeft: 20,
    paddingRight: 20,
  },
  achievementsContainer: {
    width: 350,
    height: 150,
    backgroundColor: "#141619",
    borderRadius: 8,
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  achievementsText: {
    textAlign: "center",
    fontSize: 20,
    color: "#F9C305",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  img: {
    width: 80,
    height: 80,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
