import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";
import PremiumImg from "../../images/AdobeStock_726375080.jpeg";
import { LinearGradient } from "expo-linear-gradient";
import PriceBoxes from "./PricesBoxes";
import Testimonials from "./Testimonials";
import CloseBtn from "../../images/211651_close_round_icon (1).png";

export default function PremiumModal({ isOpen, onClose }) {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.closeContainer}>
          <Pressable onPress={onClose}>
            <Image source={CloseBtn} style={styles.closeButton} />
          </Pressable>
        </View>
        <StatusBar hidden />
        <View style={styles.modalContainer}>
          <View>
            <Image source={PremiumImg} style={{ width: 400, height: 500 }} />
            <LinearGradient
              colors={["#00000000", "#1B2126"]}
              locations={[0.5, 0.8]}
              style={{ ...StyleSheet.absoluteFillObject }}
            />
          </View>
          <View style={styles.PremiumContainer}>
            <Text style={styles.PremiumSlogan}>
              Unlock a World of Gym Exercises for Your
              <Text style={styles.PremiumSlogan2}>
                {" "}
                Ultimate Fitness Journey
              </Text>
            </Text>
            <View>
              <Testimonials />
            </View>
            <View style={styles.pricesbox}>
              <PriceBoxes
                text={"Start 7-day free trial"}
                subtext={"then £5.00/month, billed annualy"}
                style={{
                  backgroundColor: "#F9C305",
                  color: "black",
                  borderWidth: 0,
                  paddingTop: Platform.OS === "ios" ? 5 : 3,
                }}
              />
              <PriceBoxes text={"Monthly"} price={"£16.99"} />
              <PriceBoxes text={"Lifetime"} price={"£119.99"} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#1B2126",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "transparent",
  },
  PremiumContainer: {
    marginTop: Platform.OS === "ios" ? -200 : -250,
    paddingLeft: 10,
    paddingRight: 10,
  },
  PremiumSlogan: {
    fontFamily: "Inter_600SemiBold",
    color: "white",
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
  },
  PremiumSlogan2: {
    fontFamily: "Inter_600SemiBold",
    color: "#F9C305",
    fontSize: 20,
  },
  pricesbox: {
    marginTop: 30,
    gap: 20,
  },
  closeContainer: {
    position: "absolute",
    top: Platform.OS === "ios" ? 40 : 20,
    right: 20,
    zIndex: 99,
  },
  closeButton: {
    width: 20,
    height: 20,
  },
});
