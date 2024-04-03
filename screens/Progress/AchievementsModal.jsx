import { Pressable, StyleSheet, Text, View, Modal, Image } from "react-native";
import React from "react";
import AchievementsLogo from "../../images/5519111_achievement_air forces_army_awards_badge_icon.png";
import CloseBtn from "../../images/211651_close_round_icon (1).png";

export default function AchievementsModal({ isOpen, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}
    >
      <Pressable onPress={onClose} style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.achievementContainer}>
            <Image source={AchievementsLogo} />
            <Text style={styles.title}>First of Many</Text>
            <Text style={styles.text}>
              Completing your first session with LiftLabs Workout Plan
            </Text>
            <Text style={styles.date}>01/04/2024, 10:25</Text>
            <Pressable style={styles.shareButton}>
              <View style={styles.shareContainer}>
                <Text style={styles.shareText}>Share</Text>
              </View>
            </Pressable>
            <View style={styles.closeContainer}>
              <Pressable onPress={onClose}>
                <Image source={CloseBtn} style={styles.closeButton} />
              </Pressable>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "transparent",
  },
  achievementContainer: {
    width: 370,
    height: 500,
    backgroundColor: "#1B2126",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 20,
    color: "#F9C305",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    fontStyle: "italic",
    width: 190,
    lineHeight: 25,
  },
  date: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    opacity: 0.6,
    marginTop: 10,
  },
  shareButton: {
    width: 300,
    height: 50,
    backgroundColor: "#F9C305",
    borderRadius: 8,
    marginTop: 15,
  },
  shareContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  shareText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  closeContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButton: {
    width: 20,
    height: 20,
  },
});
