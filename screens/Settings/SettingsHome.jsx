import { StyleSheet, View, Image, ScrollView } from "react-native";
import React from "react";
import SettingLinks from "./SettingLinks";
import MyProfileImg from "../../images/1564534_customer_man_user_account_profile_icon.png";
import MeasurementsImg from "../../images/9035543_scale_outline_icon.png";
import CalenderImg from "../../images/3671721_calendar_icon.png";
import SocialLinks from "./SocialLinks";
import Logo from "../../images/Liftlabs (1)-cropped 4.png";

export default function SettingsHome() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SettingLinks text={"My Profile"} img={MyProfileImg} />
        <SettingLinks text={"Units of Measurements"} img={MeasurementsImg} />
        <SettingLinks text={"Workout Reminders"} img={CalenderImg} />
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
    gap: 20,
  },
});
