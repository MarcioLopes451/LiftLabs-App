import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import Logo from "../images/Liftlabs (1)-cropped 4.png";

export default function SplashScreen({ setIsLoading }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
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
    backgroundColor: "#1B2126",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
