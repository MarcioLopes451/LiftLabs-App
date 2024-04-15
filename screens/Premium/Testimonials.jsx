import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import Paginator from "./Paginator";
import { TestimonialList } from "./TestimonialList";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const renderItem = ({ item }) => (
    <View style={[styles.testimonialContainer, { marginHorizontal: 30 }]}>
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.titleName}>- {item.name}</Text>
      </View>
      <Image source={item.image} style={{ marginTop: 10 }} />
      <Text style={styles.text}>{item.description}</Text>
    </View>
  );

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={TestimonialList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={TestimonialList} scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  testimonialContainer: {
    backgroundColor: "#2e3439",
    width: 300,
    padding: 15,
    borderRadius: 8,
  },
  titleSection: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  titleText: {
    fontSize: 15,
    color: "white",
    fontFamily: "Inter_600SemiBold",
  },
  titleName: {
    fontSize: 15,
    color: "white",
    fontFamily: "Inter_500Medium",
    opacity: 0.8,
  },
  text: {
    fontSize: 15,
    color: "white",
    fontFamily: "Inter_500Medium",
    marginTop: 10,
  },
});
