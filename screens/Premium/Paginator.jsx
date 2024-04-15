import {
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <TouchableOpacity key={i.toString()}>
            <Animated.View
              style={[styles.dot, { width: dotWidth, opacity }]}
              key={i.toString()}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 8,
  },
});
