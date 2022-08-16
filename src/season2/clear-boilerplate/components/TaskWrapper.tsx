import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import Task, { TASK_HEIGHT } from "./Task";

interface Props {
  task: string;
  backgroundColor: string; //| typeof Value;
  fingerAt: Animated.SharedValue<number>;
  index: number;
  animScale: Animated.SharedValue<number>;
}

export default function TaskWrapper({
  task,
  backgroundColor,
  fingerAt,
  index,
  animScale,
}: Props) {
  const isTop = useDerivedValue(() => {
    return index < fingerAt.value ? -1 : 1;
  }, []);

  const style = useAnimatedStyle(() => {
    const translateY = isTop.value * (animScale.value * (TASK_HEIGHT / 4));
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View style={[style]}>
      <Task {...{ task, backgroundColor }} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
