import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

interface Props {
  y: Animated.SharedValue<number>;
}

export default function Header({ y }: Props) {
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -Math.abs(y.value) }],
    };
  });

  return (
    <Animated.View style={[styles.header, style]}>
      <Text style={{ fontSize: 20 }}>Header</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "red",
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
