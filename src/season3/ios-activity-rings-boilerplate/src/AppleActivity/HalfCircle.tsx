import React from "react";
import { View } from "react-native";

interface HalfCircleProps {
  flipped?: boolean;
  color: string;
  radius: number;
}

export default ({ color, radius }: HalfCircleProps) => {
  return (
    <View
      style={{
        width: radius * 2,
        height: radius,
        overflow: "hidden"
      }}
    >
      <View
        style={{
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
          overflow: "hidden",
          backgroundColor: color
        }}
      />
    </View>
  );
};
