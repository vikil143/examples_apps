import React from "react";
import { View, ViewStyle } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

interface CircleProps {
  style?: ViewStyle;
  size?: number;
  backgroundColor?: string;
}

export default function Circle({
  style,
  backgroundColor = "red",
  size = 100,
  ...props
}: CircleProps) {
  return (
    <View
      {...props}
      style={[
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
        style,
      ]}
    ></View>
  );
}
