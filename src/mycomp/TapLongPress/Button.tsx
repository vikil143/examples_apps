import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import CircularProgress from "./CircularProgress";

const SIZE = 150;

interface Props {
  progress: Animated.SharedValue<number>;
}

export default function Button({ progress }: Props) {
  const style = useAnimatedStyle(() => {
    return {
      overflow: "hidden",
      width: 90,
      height: interpolate(progress.value, [0, 1], [0, 90]),
    };
  });

  return (
    <View style={{}}>
      <CircularProgress size={SIZE} {...{ progress }}></CircularProgress>
      <View style={[StyleSheet.absoluteFillObject, styles.centerArea]}>
        <View>
          <Icon name="fingerprint" size={90} color="#fff" />
          <Animated.View style={[StyleSheet.absoluteFill, style]}>
            <Icon name="fingerprint" size={90} color="blue" />
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerArea: {
    width: SIZE - 40,
    height: SIZE - 40,
    borderRadius: SIZE - 40,
    zIndex: 2,
    transform: [
      { translateX: SIZE / 2 - (SIZE - 40) / 2 },
      { translateY: SIZE / 2 - (SIZE - 40) / 2 },
    ],
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: "white",
  },
});
