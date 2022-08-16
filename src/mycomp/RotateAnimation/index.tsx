import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { mix } from "../../animation_helpers/animation";
import { mountTiming } from "../../animation_helpers/hooks";
import Logo from "./Logo";

// const scale = interpolate(progress.value, [0, 1], [0.4, 1]);
// const rotate = interpolate(progress.value, [0, 1], [0, 2 * Math.PI * 3]);

export default function RotateAnimation() {
  const progress = mountTiming(3000);

  //   const progress = useSharedValue(0);

  //   useEffect(() => {
  //     progress.value = withTiming(1, { duration: 3000 });
  //   }, []);

  const style = useAnimatedStyle(() => {
    const scale = mix(progress, 0.4, 1);
    const rotate = mix(progress, 0, 2 * Math.PI * 3);
    return {
      transform: [{ scale }, { rotate: `${rotate}rad` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[style]}>
        <Logo />
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
});
