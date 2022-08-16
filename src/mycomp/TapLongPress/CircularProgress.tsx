import React from "react";
import { ReactNode } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

const SIZE = 150;

interface HalfCircleProps {
  size: number;
  color: string;
}

function HalfCircle({ size, color }: HalfCircleProps) {
  return (
    <View
      style={{
        width: size,
        height: size / 2,
        overflow: "hidden",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      {/* <View
        style={{
          width: 3,
          height: 3,
          borderRadius: 3 / 2,
          backgroundColor: "red",
          position: "absolute",
          zIndex: 2,
          transform: [{ translateY: size / 2 / 2 }, { translateX: size / 2 }],
        }}
      /> */}
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        }}
      />
    </View>
  );
}

interface CircularProgressProps {
  progress: Animated.SharedValue<number>;
  size?: number;
  children?: ReactNode;
  childStyle?: ViewStyle;
}

export default function CircularProgress({
  progress,
  size = SIZE,
  children,
  childStyle,
}: CircularProgressProps) {
  const theta = useDerivedValue(() => {
    return progress.value * Math.PI * 2;
  });

  const topStyle = useAnimatedStyle(() => {
    const opacity = progress.value < 0.5 ? 1 : 0;
    return {
      opacity,
      transform: [
        { translateY: size / 2 / 2 },
        { rotate: `${interpolate(theta.value, [0, Math.PI], [0, 180])}deg` },
        { translateY: -size / 2 / 2 },
      ],
    };
  });

  const bottomStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: size / 2 / 2 },
        {
          rotate: `${interpolate(
            theta.value,
            [Math.PI, 2 * Math.PI],
            [0, 180],
            Extrapolate.CLAMP
          )}deg`,
        },
        { translateY: -size / 2 / 2 },
      ],
    };
  });

  return (
    <View>
      <View style={{ zIndex: 1 }}>
        <HalfCircle size={size} color="blue" />
        <Animated.View style={[StyleSheet.absoluteFill, topStyle]}>
          <HalfCircle size={size} color="#ddd" />
        </Animated.View>
      </View>

      <View
        style={{
          transform: [{ rotate: "180deg" }],
        }}
      >
        <HalfCircle size={size} color="blue" />
        <Animated.View style={[StyleSheet.absoluteFill, bottomStyle]}>
          <HalfCircle size={size} color="#ddd" />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  childStyle: {
    zIndex: 2,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
});
