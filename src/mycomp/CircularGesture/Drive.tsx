import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

interface DriveProps {
  size?: number;
  style?: ViewStyle;
}

export default function Drive({ size = 50, style }: DriveProps) {
  return (
    <Animated.View
      style={[
        {
          backgroundColor: "green",
          width: size,
          height: size,
          borderRadius: size,
        },
        style,
      ]}
    ></Animated.View>
  );
}

const styles = StyleSheet.create({});
