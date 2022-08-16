import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Task, { TASK_HEIGHT } from "./Task";

interface Props {
  index: Animated.SharedValue<number>;
  scale: Animated.SharedValue<number>;
}

export default function NewTask({ index, scale }: Props) {
  const style = useAnimatedStyle(() => {
    const translateY = index.value * TASK_HEIGHT - TASK_HEIGHT / 2;
    return {
      transform: [{ translateY }],
    };
  });

  const topContainer = useAnimatedStyle(() => {
    const rotateX = interpolate(scale.value, [1, 2], [90, 0]);
    return {
      transform: [{ rotateX: `${rotateX}deg` }],
    };
  });

  const bottomContainer = useAnimatedStyle(() => {
    const rotateX = interpolate(scale.value, [1, 2], [-90, 0]);
    return {
      transform: [
        // { translateY: TASK_HEIGHT / 2 },
        { rotateX: `${rotateX}deg` },
        // { translateY: -TASK_HEIGHT / 2 },
      ],
    };
  });

  return (
    <Animated.View
      style={[{ position: "absolute", top: 0, left: 0, right: 0 }, style]}
    >
      <Animated.View style={[styles.container, topContainer]}>
        <Task
          task="Pinch to zoom new task"
          style={{ ...StyleSheet.absoluteFillObject }}
          backgroundColor="green"
        />
      </Animated.View>
      <Animated.View style={[styles.container, bottomContainer]}>
        <Task
          task="Pinch to zoom new task"
          style={{ ...StyleSheet.absoluteFillObject }}
          backgroundColor="red"
        />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: TASK_HEIGHT,
    // justifyContent: "center",
    // padding: 8,
  },
});
