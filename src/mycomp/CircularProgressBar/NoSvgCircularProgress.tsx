import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import HalfCircle, { RADIUS } from "./HalfCircle";

interface Props {
  progress: Animated.SharedValue<number>;
}

export default function NoSvgCircularProgress({ progress }: Props) {
  const theta = useDerivedValue(() => {
    return progress.value * Math.PI * 2;
  });

  const styleTopCircle = useAnimatedStyle(() => {
    const rotate = interpolate(
      theta.value,
      [0, Math.PI],
      [0, 180],
      Extrapolate.CLAMP
    );

    const opacity = theta.value < Math.PI ? 1 : 0;

    return {
      opacity,
      transform: [
        { translateY: RADIUS / 2 },
        { rotate: `${rotate}deg` },
        { translateY: -RADIUS / 2 },
      ],
    };
  });

  const styleBottomCircle = useAnimatedStyle(() => {
    const rotate = interpolate(
      theta.value,
      [Math.PI, Math.PI * 2],
      [0, 180],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateY: RADIUS / 2 },
        { rotate: `${rotate}deg` },
        { translateY: -RADIUS / 2 },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={{ zIndex: 1 }}>
        <HalfCircle color="blue" />
        <Animated.View style={[StyleSheet.absoluteFill, styleTopCircle]}>
          <HalfCircle color="#ddd" />
        </Animated.View>
      </View>
      <View style={{ transform: [{ rotate: "180deg" }] }}>
        <HalfCircle color="blue" />
        <Animated.View style={[StyleSheet.absoluteFill, styleBottomCircle]}>
          <HalfCircle color="#ddd" />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
