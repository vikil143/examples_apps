import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  lessOrEq
} from "react-native-reanimated";
import { transformOrigin } from "react-native-redash";

import { PI, TAU } from "./Constants";
import HalfCircle from "./HalfCircle";

interface CircularProgressProps {
  theta: Animated.Node<number>;
  radius: number;
  bg: string;
  fg: string;
}

export default ({ theta, radius, fg, bg }: CircularProgressProps) => {
  const opacity = lessOrEq(theta, PI);
  const rotate = interpolate(theta, {
    inputRange: [PI, TAU],
    outputRange: [0, PI],
    extrapolate: Extrapolate.CLAMP
  });
  return (
    <>
      <View style={{ zIndex: 1 }}>
        <View style={StyleSheet.absoluteFill}>
          <HalfCircle color={fg} {...{ radius }} />
        </View>
        <Animated.View
          style={{
            opacity,
            transform: [
              ...transformOrigin({ x: 0, y: radius / 2 }, { rotate: theta })
            ]
          }}
        >
          <HalfCircle color={bg} {...{ radius }} />
        </Animated.View>
      </View>
      <View
        style={{
          transform: [{ rotate: "180deg" }]
        }}
      >
        <View style={StyleSheet.absoluteFillObject}>
          <HalfCircle color={fg} {...{ radius }} />
        </View>
        <Animated.View
          style={{
            transform: [...transformOrigin({ x: 0, y: radius / 2 }, { rotate })]
          }}
        >
          <HalfCircle color={bg} {...{ radius }} />
        </Animated.View>
      </View>
    </>
  );
};
