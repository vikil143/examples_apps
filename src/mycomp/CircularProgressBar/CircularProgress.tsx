import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedProps,
} from "react-native-reanimated";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const { width, height } = Dimensions.get("window");

const size = width - 32;
const strokeWidth = 50;
const r = (size - strokeWidth) / 2;
const curcumferance = 2 * Math.PI * r;

interface Props {
  progress: Animated.SharedValue<number>;
}

export default function CircularProgress({ progress }: Props) {
  const animatedPropsBottom = useAnimatedProps(() => {
    return {
      strokeDashoffset: interpolate(
        progress.value,
        [0, 1],
        [curcumferance * 0, curcumferance * 1]
      ),
    };
  });

  return (
    <View>
      <Svg width={size} height={size}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0" stopColor={"red"} />
            <Stop offset="1" stopColor={"blue"} />
          </LinearGradient>
        </Defs>
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          fill="none"
          stroke="rgba(0,0,0,0.6)"
          {...{ strokeWidth, r }}
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          fill="none"
          stroke="url(#grad)"
          strokeDasharray={`${curcumferance}`}
          animatedProps={animatedPropsBottom}
          {...{ strokeWidth, r }}
        />
        {/* <Path d={d} fill="blue" /> */}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
