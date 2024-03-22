import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import Logo from "../images/Liftlabs (1)-cropped 4.png";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={Logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141619",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
