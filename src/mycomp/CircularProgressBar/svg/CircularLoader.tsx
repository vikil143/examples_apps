import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { polar2Canvas } from "react-native-redash";
import Svg, { Circle, Path } from "react-native-svg";
import { SCREEN_WIDTH } from "../../../constants";

const SIZE = SCREEN_WIDTH;
const RADIUS = (SIZE - 60) / 2;

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function CircularLoader() {
  const start = useSharedValue(Math.PI / 3);
  const end = useSharedValue(Math.PI * 2 * 0.6);

  const startPos = useDerivedValue(() => {
    return polar2Canvas(
      { theta: start.value, radius: RADIUS },
      { x: SIZE / 2, y: SIZE / 2 }
    );
  });

  const endPos = useDerivedValue(() => {
    return polar2Canvas(
      { theta: end.value, radius: RADIUS },
      { x: SIZE / 2, y: SIZE / 2 }
    );
  });

  const animatedProps = useAnimatedProps(() => {
    return {
      d: `M ${startPos.value.x} ${startPos.value.y} A ${RADIUS} ${RADIUS} 0 1 1 ${endPos.value.x} ${endPos.value.y}`,
      //   transform: [{  }],
    };
  });

  return (
    <Svg width={SIZE} height={SIZE}>
      <Circle
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={RADIUS}
        stroke={"#ddd"}
        strokeWidth={3}
      />
      <AnimatedPath
        stroke={"blue"}
        strokeWidth={3}
        animatedProps={animatedProps}
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
