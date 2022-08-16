import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

interface Props {
  y: Animated.SharedValue<number>;
}

export default function Footer({ y }: Props) {
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: Math.abs(y.value) }],
    };
  });
  return (
    <Animated.View style={[styles.footer, style]}>
      <Text style={{ fontSize: 20 }}>Footer</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
