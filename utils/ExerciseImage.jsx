import React from "react";
import { View, Image } from "react-native";
import { Images } from "./Images";

export const ExerciseImage = ({ exerciseId }) => {
  const imagePaths = Images[exerciseId];

  return (
    <View>
      {imagePaths && imagePaths.length > 0 && (
        <Image source={imagePaths[0]} style={{ width: 180, height: 130 }} />
      )}
    </View>
  );
};

export default ExerciseImage;

export const ExerciseDImage = ({ exerciseId }) => {
  const imagePaths = Images[exerciseId];

  return (
    <View>
      {imagePaths && imagePaths.length > 0 && (
        <View>
          <Image
            source={imagePaths[0]}
            style={{ width: 300, height: 200, marginTop: 10 }}
          />
          <Image
            source={imagePaths[1]}
            style={{ width: 300, height: 200, marginTop: 20 }}
          />
        </View>
      )}
    </View>
  );
};
