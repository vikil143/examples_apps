import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import VLine from "../../VLine";
import { SIZE } from "./constants";
import Dates from "./Dates";

// const BORDER_SIDE = 1;

interface Props {
  dates: number[];
}

export default function MainContainer({ dates }: Props) {
  const translateX = useSharedValue(-SIZE * 7);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      //   translateX.value = ctx.x;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = ctx.x + translationX;
    },
    onEnd: () => {},
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View>
      <View style={styles.selectedMonthBorder}></View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View>
          <Animated.View style={[styles.container, containerStyle]}>
            <Dates
              dates={dates}
              containerStyle={{ backgroundColor: "red", opacity: 0 }}
            />
            <Dates
              dates={dates}
              //   containerStyle={{ backgroundColor: "green" }}
            />
            <Dates
              dates={dates}
              containerStyle={{ backgroundColor: "yellow", opacity: 0 }}
            />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  rightLine: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
  },
  selectedMonthBorder: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    // overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "row",
    // transform: [{ translateX: -SIZE * 7 }],
    // overflow: "hidden",
  },
});
