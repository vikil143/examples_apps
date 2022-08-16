import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

interface Props {
  children: ReactNode;
  iR: number[];
  oR: number[];
  progress: Animated.SharedValue<number>;
}
export default function Rotation({ children, progress, iR, oR }: Props) {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, iR, oR);
    return {
      opacity,
    };
  });

  return <Animated.View style={[style]}>{children}</Animated.View>;
}

const styles = StyleSheet.create({});
