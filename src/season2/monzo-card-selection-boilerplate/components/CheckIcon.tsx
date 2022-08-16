import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

interface CheckIconProps {
  color: string;
  selectedCard: Animated.SharedValue<number>;
  index: number;
}

const CHECK_ICON_SIZE = 35;

export default ({
  selectedCard,
  color: backgroundColor,
  index,
}: CheckIconProps) => {
  const style = useAnimatedStyle(() => {
    if (selectedCard.value === index) {
      return {
        backgroundColor,
      };
    }

    return {
      opacity: 0,
    };
  });

  return (
    <Animated.View style={[styles.container, style]}>
      <Icon name="check" color="white" size={24} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CHECK_ICON_SIZE,
    height: CHECK_ICON_SIZE,
    borderRadius: CHECK_ICON_SIZE / 2,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
