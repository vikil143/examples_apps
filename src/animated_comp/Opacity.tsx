import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

interface OpacityProps {
  children: ReactNode;
  iR: number[];
  oR: number[];
  progress: Animated.SharedValue<number>;
}

export default function Opacity({ children, iR, oR, progress }: OpacityProps) {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, iR, oR);
    return {
      opacity,
    };
  });

  return <Animated.View style={[style]}>{children}</Animated.View>;
}

const styles = StyleSheet.create({});
