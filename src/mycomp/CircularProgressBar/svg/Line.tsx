import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import Svg, { Line as SLine } from "react-native-svg";
import { mix } from "../../../animation_helpers/animation";
import { mountTiming } from "../../../animation_helpers/hooks";
import { SCREEN_WIDTH } from "../../../constants";

const AnimatedLine = Animated.createAnimatedComponent(SLine);

export default function Line() {
  const progress = mountTiming();

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: mix(progress, SCREEN_WIDTH, 0),
    };
  });

  return (
    <Svg width={SCREEN_WIDTH} height={SCREEN_WIDTH}>
      <AnimatedLine
        x1="0"
        x2={SCREEN_WIDTH}
        y1={"0"}
        y2={0}
        strokeWidth={3}
        stroke="grey"
        strokeDasharray={[SCREEN_WIDTH, SCREEN_WIDTH]}
        animatedProps={animatedProps}
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
