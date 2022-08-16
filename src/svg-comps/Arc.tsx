import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
} from "react-native-reanimated";
import { polar2Canvas } from "react-native-redash";
import { Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface ArcProps {
  startAngle: number;
  endAngle: number;
  radius: number;
}

export default function Arc({}: ArcProps) {
  // const startPos = useDerivedValue(() => polar2Canvas())

  const animatedProps = useAnimatedProps(() => {
    return {
      d: ``,
    };
  });

  return <AnimatedPath animatedProps={animatedProps} />;
}

const styles = StyleSheet.create({});
