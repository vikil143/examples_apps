import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
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
    const inputRange = [0, i * 20];
    const outputRange = [0, -((cardHeight - cardTitle) * i)];
    // if (i < 0) {
    //   inputRange.push(0);
    //   outputRange.push(0);
    // }
    // inputRange.push(i * 20);
    // outputRange.push(-(cardHeight - cardTitle) * i);

    const translateY = interpolate(-Math.abs(y.value), inputRange, outputRange);
    return {
      transform: [{ translateY }],
    };
  });

  let translateY: number;

  if (i < 1) {
    translateY = 0;
  } else {
    translateY = -((cardHeight - cardTitle) * i);
  }

  return (
    <Animated.View
      key={i}
      // style={[{ transform: [{ translateY }] }]}
      style={[style]}
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
