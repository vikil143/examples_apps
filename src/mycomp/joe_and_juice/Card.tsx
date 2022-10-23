import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export const cardHeight = 250;
export const cardTitle = 45;
export const cardPadding = 10;

interface CardProps {
  color: string;
  y: Animated.SharedValue<number>;
  i: number;
}

export default function Card({ color, y, i }: CardProps) {
  const style = useAnimatedStyle(() => {
    const inputRange = [-i + cardHeight, 0];
    const outputRange = [-i + cardHeight, (i * 30)];

    const translateY = interpolate(y.value, inputRange, outputRange, Extrapolate.CLAMP);
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View
      key={i}
      // style={[{ transform: [{ translateY }] }]}
      style={[{ position: "absolute", width: "100%" }, style]}
    >
      <View style={[styles.card, { backgroundColor: color }]}></View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: cardHeight,
    borderRadius: 10,
  },
});
