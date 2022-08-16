import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { polar2Canvas } from "react-native-redash";
// import { polar2Canvas } from "../../coordinates";

import { SCREEN_WIDTH } from "../../constants";

const CENTER = { x: SCREEN_WIDTH / 2, y: SCREEN_WIDTH / 2 };

interface Vector {
  x: number;
  y: number;
}

interface CircleProps {
  size: number;
  backgroundColor?: string;
  theta?: number;
  radius?: number;
  xOffset?: number;
  yOffset?: number;
  progress: Animated.SharedValue<number>;
  inputRange: [number, number];
  outputRange: [number, number];
}

export default function ACircle({
  size = 70,
  backgroundColor = "red",
  theta = Math.PI,
  radius = size / 2,
  xOffset = 0,
  yOffset = 0,
  progress,
  inputRange,
  outputRange,
}: CircleProps) {
  const style = useAnimatedStyle(() => {
    const { x, y } = polar2Canvas({ theta, radius: radius! }, CENTER);
    const scale = interpolate(
      progress.value,
      inputRange,
      outputRange,
      Extrapolate.CLAMP
    );
    return {
      transform: [
        { translateX: x + xOffset! },
        { translateY: y + yOffset! },
        { scale },
      ],
    };
  });

  //   const style1 = useAnimatedStyle(() => {
  //     const { x, y } = polar2Canvas({ theta, radius: radius! }, CENTER);

  //     return {
  //       transform: [{ translateX: x + xOffset! }, { translateY: y + yOffset! }],
  //     };
  //   });

  //   const { x, y } = polar2Canvas({ theta, radius: radius! }, CENTER);
  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          //   transform: [
          //     { translateX: x + xOffset! },
          //     { translateY: y + yOffset! },
          //   ],
        },
        style,
      ]}
    ></Animated.View>
  );
}

const styles = StyleSheet.create({});
