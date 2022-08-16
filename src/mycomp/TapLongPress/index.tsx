import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import {
  PanGestureHandler,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { bInterpolate } from "../../helpers";
import Button from "./Button";

export default function TapLongPress() {
  const progress = useSharedValue(0);

  const tapGesture = useAnimatedGestureHandler({
    onStart: () => {
      progress.value = withTiming(1, { duration: 2000 });
    },
    onEnd: () => {
      progress.value = withTiming(0, { duration: 250 });
    },
  });

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1],
      [1, 1.3],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ scale }],
    };
  });

  const onLongPress = () => {
    progress.value = withTiming(1, { duration: 1500 });
  };

  const onPressOut = () => {
    progress.value = withTiming(0, { duration: 250 });
  };

  return (
    <View style={styles.container}>
      {/* <PanGestureHandler onHandlerStateChange={tapGesture}> */}
      <TouchableWithoutFeedback
        onLongPress={onLongPress}
        onPressOut={onPressOut}
      >
        <Animated.View style={[style]}>
          <Button {...{ progress }} />
        </Animated.View>
      </TouchableWithoutFeedback>
      {/* </PanGestureHandler> */}
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
