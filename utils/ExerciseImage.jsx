import React from "react";
import { View, Image } from "react-native";
import { Images } from "./Images";

export const ExerciseImage = ({ exerciseId }) => {
  const imagePaths = Images[exerciseId];

  return (
    <View>
      {imagePaths && imagePaths.length > 0 && (
        <Image source={imagePaths[0]} style={{ width: 100, height: 100 }} />
      )}
    </View>
  );
};

export default ExerciseImage;
