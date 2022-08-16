import { useEffect } from "react";
import { useSharedValue, withTiming } from "react-native-reanimated";

// Better name it useAnimatedOnMount
export const mountTiming = (duration?: number) => {
  const result = duration ?? 1000;
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, { duration: result });
  }, []);

  return progress;
};
