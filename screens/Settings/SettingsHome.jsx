import { StyleSheet, View, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import SettingLinks from "./SettingLinks";
import MyProfileImg from "../../images/1564534_customer_man_user_account_profile_icon.png";
import MeasurementsImg from "../../images/9035543_scale_outline_icon.png";
import CalenderImg from "../../images/3671721_calendar_icon.png";
import SocialLinks from "./SocialLinks";
import Logo from "../../images/Liftlabs (1)-cropped 4.png";

export default function SettingsHome({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ gap: 20 }}>
          <Pressable onPress={() => navigation.navigate("MyProfile")}>
            <SettingLinks text={"My Profile"} img={MyProfileImg} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Measurements")}>
            <SettingLinks
              text={"Units of Measurements"}
              img={MeasurementsImg}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("WorkoutReminders")}>
            <SettingLinks text={"Workout Reminders"} img={CalenderImg} />
          </Pressable>
        </View>
        <SocialLinks />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={Logo}
            style={{
              width: 90,
              height: 70,
              marginTop: 50,
              marginBottom: 40,
            }}
          />
        </View>
      </ScrollView>
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
});
