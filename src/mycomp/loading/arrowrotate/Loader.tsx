import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface LoaderProps {
  size?: number;
  progress: Animated.SharedValue<number>;
}

export default function Loader({ size = 100, progress }: LoaderProps) {
  const style = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, 360]);
    return {
      transform: [
        // { rotate: `${rotate}deg` },
        // { translateX },

        { translateX: -size / 2 / 2 },
        { translateY: size / 2 / 2 },
        { rotate: `${rotate}deg` },
        { translateX: size / 2 / 2 },
        { translateY: -size / 2 / 2 },
      ],
    };
  });
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      {/* <View
        style={{
          backgroundColor: "green",
          width: 10,
          height: 10,
          borderRadius: 10 / 2,
          zIndex: 1,
        }}
      /> */}
      <AnimatedLinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[
          // "red",
          // "blue",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.4)",
          "rgba(255, 255, 255, 0.1)",
        ]}
        style={[
          {
            position: "absolute",
            top: 0,
            left: size / 2,
            width: size / 2,
            height: size / 2,
            // transform: [
            //   { translateX: -size / 2 / 2 },
            //   { translateY: size / 2 / 2 },
            //   // { rotate: "100deg" },
            //   { translateX: size / 2 / 2 },
            //   { translateY: -size / 2 / 2 },
            // ],
          },
          style,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e9ee",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
