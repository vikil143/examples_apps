import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";
import { SCREEN_WIDTH } from "../../constants";

const SIZE = SCREEN_WIDTH - 10;

export default function CircularDot() {
  const progress = useSharedValue(0);
  const theta = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 2000 }), -1, false);
  }, []);

  const style = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, 2 * Math.PI]);
    return {
      transform: [{ rotate: `${rotate}rad` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, style]}>
        <View
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            backgroundColor: "cyan",
            borderRadius: 20,
            transform: [
              { translateX: (SIZE - 40) / 2 },
              { translateY: -(40 / 2) },
            ],
          }}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: SIZE,
    height: SIZE,
    borderWidth: 1,
    borderRadius: SIZE / 2,
  },
});
