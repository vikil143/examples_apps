import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
} from "react-native-reanimated";
import { polar2Canvas, Vector } from "react-native-redash";
import Svg, { Path, Circle } from "react-native-svg";
import { SCREEN_WIDTH } from "../../../constants";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const HALFSCREEN = SCREEN_WIDTH / 2;
const CENTER = { x: HALFSCREEN, y: HALFSCREEN };
const RADIUS = (SCREEN_WIDTH - 80) / 2;
const startAngle = Math.PI;
const endAngle = 2 * Math.PI;

interface ArcProps {
  startAngle: Animated.SharedValue<number>;
  endAngle: Animated.SharedValue<number>;
}

export default function Arc({ startAngle, endAngle }: ArcProps) {
  const startPos = useDerivedValue(() =>
    polar2Canvas({ theta: startAngle.value, radius: RADIUS }, CENTER)
  );
  const endPos = useDerivedValue(() =>
    polar2Canvas({ theta: endAngle.value, radius: RADIUS }, CENTER)
  );

  const animatedProps = useAnimatedProps(() => {
    return {
      d: `M ${startPos.value.x} ${startPos.value.y} A ${RADIUS} ${RADIUS} 0 0 1 ${endPos.value.x} ${endPos.value.y}`,
    };
  });

  const animatedProps1 = useAnimatedProps(() => {
    return {
      cx: endPos.value.x,
      cy: endPos.value.y,
    };
  });
  const animatedProps2 = useAnimatedProps(() => {
    return {
      cx: startPos.value.x,
      cy: startPos.value.y,
    };
  });

  return (
    <Svg width={SCREEN_WIDTH} height={SCREEN_WIDTH}>
      <Circle
        r={RADIUS}
        cx={CENTER.x}
        cy={CENTER.y}
        strokeWidth={40}
        stroke="white"
      />
      <AnimatedPath
        animatedProps={animatedProps}
        strokeWidth={40}
        stroke="rgba(255,0,0,0.6)"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
