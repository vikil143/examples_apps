import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { mix } from "../../../animation_helpers/animation";
import { SCREEN_WIDTH } from "../../../constants";
import Quadrant from "./Quadrant";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const PADDING = 15;
const STROKE = 30;
const RADIUS = (SCREEN_WIDTH - STROKE) / 2;

interface Props {
  progress: Animated.SharedValue<number>;
}

export default function SvgCircle({ progress }: Props) {
  const c = 2 * Math.PI * (RADIUS - PADDING);
  const animatedProps1 = useAnimatedProps(() => {
    const offset = mix(progress, c, c * 0.6);
    return {
      strokeDashoffset: offset,
    };
  });

  const animatedProps2 = useAnimatedProps(() => {
    const offset = mix(progress, c, c * 0.3);
    return {
      strokeDashoffset: offset,
    };
  });

  return (
    <View>
      <Svg width={RADIUS * 2} height={RADIUS * 2}>
        <AnimatedCircle
          r={RADIUS - PADDING}
          cx={RADIUS}
          cy={RADIUS}
          stroke={"#ddd"}
          strokeWidth={STROKE}
        />
        <AnimatedCircle
          r={RADIUS - PADDING}
          cx={RADIUS}
          cy={RADIUS}
          stroke={"red"}
          strokeWidth={STROKE}
          strokeDasharray={`${2 * Math.PI * (RADIUS - PADDING)} ${
            2 * Math.PI * (RADIUS - PADDING)
          }`}
          animatedProps={animatedProps2}
          strokeLinecap="round"
        />
        <AnimatedCircle
          r={RADIUS - PADDING}
          cx={RADIUS}
          cy={RADIUS}
          stroke={"blue"}
          strokeWidth={STROKE}
          strokeDasharray={`${2 * Math.PI * (RADIUS - PADDING)} ${
            2 * Math.PI * (RADIUS - PADDING)
          }`}
          animatedProps={animatedProps1}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
