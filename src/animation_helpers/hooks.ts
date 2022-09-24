import { useEffect } from "react";
import Animated, { useSharedValue, withTiming, Easing, withRepeat, cancelAnimation } from "react-native-reanimated";

// Better name it useAnimatedOnMount
export const mountTiming = (duration?: number): Animated.SharedValue<number> => {
  const result = duration ?? 1000;
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, { duration: result, easing: Easing.linear });
  }, []);

  return progress;
};

export const mountLoop = (
  duration: number = 1000,
  noOfLoop: number = 5,
  reverse: boolean = true
) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration }),
      noOfLoop,
      reverse
    );

    return () => {
      cancelAnimation(progress)
    }
  }, []);



  return progress
};

