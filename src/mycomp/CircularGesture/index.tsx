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
import { canvas2Polar, polar2Canvas } from "react-native-redash";
import { loopAnimated } from "../../animation_helpers/animation";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import Circle from "../Circle";
import Drive from "./Drive";

const DRIVE_SIZE = 80;
const SMALL_SIZE = SCREEN_WIDTH - DRIVE_SIZE;

export default function CircularGesture() {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const progress = useSharedValue(0);

  React.useEffect(() => {
    loopAnimated(progress, 1, 5000, -1, true);
  }, []);

  const panGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      x.value = translationX + ctx.x;
      y.value = translationY + ctx.y;
    },
    onEnd: () => {},
  });

  const driveStyle = useAnimatedStyle(() => {
    const { x, y } = polar2Canvas(
      {
        theta: Math.PI * 2 * 0.6,
        radius: SMALL_SIZE / 2,
      },
      {
        x: SCREEN_WIDTH / 2,
        y: SCREEN_WIDTH / 2,
      }
    );

    return {
      transform: [{ translateX: x }, { translateY: y }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "yellow" }}>
        <Circle size={SCREEN_WIDTH} />
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Circle size={SMALL_SIZE} style={styles.smallCircle} />
        </View>

        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View style={[styles.driveCircle, driveStyle]}>
            <Text style={{ fontWeight: "bold" }}></Text>
          </Animated.View>
        </PanGestureHandler>
        <Animated.View
          style={[
            styles.driveCircle,
            {
              width: 5,
              height: 5,
              backgroundColor: "blue",
              transform: [
                { translateX: SCREEN_WIDTH / 2 },
                { translateY: SCREEN_WIDTH / 2 },
              ],
            },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}></Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  driveCircle: {
    position: "absolute",
    backgroundColor: "green",
    width: DRIVE_SIZE / 2,
    height: DRIVE_SIZE / 2,
    borderRadius: DRIVE_SIZE / 2 / 2,
  },
  smallCircle: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
