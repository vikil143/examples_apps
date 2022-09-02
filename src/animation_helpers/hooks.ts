import { useEffect } from "react";
import Animated, { useSharedValue, withTiming, Easing } from "react-native-reanimated";

// Better name it useAnimatedOnMount
export const mountTiming = (duration?: number): Animated.SharedValue<number> => {
  const result = duration ?? 1000;
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, { duration: result, easing: Easing.linear });
  }, []);

  return progress;
};
