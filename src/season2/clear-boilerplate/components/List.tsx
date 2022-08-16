import interpolate from "color-interpolate";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import Header from "./Header";
import Task, { TASK_HEIGHT } from "./Task";
import TaskWrapper from "./TaskWrapper";
import NewTask from "./NewTask";
import { clamp } from "../../../animation_helpers/animation";
// import { runSpring, interpolateColors } from "./AnimatedHelpers";

interface ListProps {
  tasks: string[];
}

// const colors = ["#C52B27", "#E1B044"];
const colors = ["red", "yellow"];
const palette = interpolate(colors);

export default ({ tasks }: ListProps) => {
  const step = 1 / tasks.length;
  const animScale = useSharedValue(1);
  const animFocalY = useSharedValue(0);
  const fingerAt = useDerivedValue(() => {
    const index = Math.round(animFocalY.value / TASK_HEIGHT);
    return clamp(index, index - 1, index + 1);
  }, [animFocalY.value]);

  const pinchGesture =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: ({ focalY, scale }) => {
        animFocalY.value = focalY;
        animScale.value = scale;
      },
      onEnd: () => {
        animScale.value = withSpring(0);
      },
    });

  return (
    <View style={styles.container}>
      <Header />
      <PinchGestureHandler onGestureEvent={pinchGesture}>
        <Animated.View>
          <NewTask index={fingerAt} scale={animScale} />
          {tasks.map((task, key) => {
            const bgColor = palette(step * key);
            return (
              <TaskWrapper
                backgroundColor={bgColor}
                index={key}
                {...{ task, key, fingerAt, animScale }}
              />
            );
          })}
        </Animated.View>
      </PinchGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
