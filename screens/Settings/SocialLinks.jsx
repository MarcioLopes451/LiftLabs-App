import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import LightBulbImg from "../../images/8665783_lightbulb_light_icon.png";
import StarImg from "../../images/216411_star_icon (3).png";
import QuestionImg from "../../images/3994396_ask_faq_help_mark_question_icon.png";
import InstagramImg from "../../images/8679433_instagram_fill_icon.png";
import TiktokImg from "../../images/8666453_tiktok_icon.png";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";

export default function SocialLinks() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.socialContainer}>
        <Image source={LightBulbImg} style={styles.img} />
        <Text style={styles.text}>Train Smart</Text>
      </View>
      <View style={styles.socialContainer}>
        <Image source={StarImg} style={styles.img} />
        <Text style={styles.text}>What's New</Text>
      </View>
      <View style={styles.socialContainer}>
        <Image source={QuestionImg} style={styles.img} />
        <Text style={styles.text}>Help</Text>
      </View>
      <View style={styles.socialContainer}>
        <Image source={InstagramImg} style={styles.img} />
        <Text style={styles.text}>Our Instagram</Text>
      </View>
      <View style={styles.socialContainer}>
        <Image source={TiktokImg} style={styles.img} />
        <Text style={styles.text}>Our Tiktok</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 378,
    backgroundColor: "#141619",
    borderRadius: 8,
    gap: 20,
    padding: 10,
    marginTop: 30,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontFamily: "Inter_700Bold",
  },
  img: {
    width: 30,
    height: 30,
  },
});
