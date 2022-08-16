import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { bInterpolate } from "../../helpers";

interface Props {
  radius: number;
  color: string;
  progress: Animated.SharedValue<number>;
  // outputRangeTX: [number, number];
  // outputRangeTY: [number, number];
  index: number;
}

export default function Circle({ radius, color, progress, index }: Props) {
  const theta = useDerivedValue(() => {
    return index * (Math.PI / 3);
  });

  const style = useAnimatedStyle(() => {
    const x = radius * Math.cos(theta.value);
    const y = radius * Math.sin(theta.value);

    const translateX = interpolate(progress.value, [0, 1], [0, x]);
    const translateY = interpolate(progress.value, [0, 1], [0, y]);
    const scale = interpolate(progress.value, [0, 1], [0.3, 1]);

    return {
      transform: [{ translateY }, { translateX }, { scale }],
    };
  });

  return (
    // <View
    //   style={[
    //     StyleSheet.absoluteFill,
    //     {
    //       backgroundColor: "rgba(255,255,255,0.6)",
    //       width: radius * 2,
    //       height: radius * 2,
    //     },
    //   ]}
    // >
    <Animated.View style={[StyleSheet.absoluteFill]}>
      <Animated.View
        style={[
          {
            width: radius * 2,
            height: radius * 2,
            borderRadius: radius,
            backgroundColor: color,
          },
          style,
        ]}
      ></Animated.View>
    </Animated.View>
    // </View>
  );
}

const styles = StyleSheet.create({});
