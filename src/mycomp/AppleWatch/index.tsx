import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Circle from "./Circle";
import Oval from "./Oval";

const RADIUS = 60;

export default function AppleWatch() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 2000 }), 6, true);
  }, []);

  const style = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, Math.PI / 3]);

    return {
      transform: [{ rotate: `${rotate}rad` }],
    };
  });

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[
          {
            width: RADIUS * 2,
            height: RADIUS * 2,
            justifyContent: "center",
            alignItems: "center",
          },
          style,
        ]}
      >
        {/* <View>
          {new Array(3).fill(0).map((_, index) => {
            return (
              <Oval
                containerStyle={StyleSheet.absoluteFillObject}
                radius={RADIUS}
                {...{ index }}
              />
            );
          })}
        </View> */}

        <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 5,
            backgroundColor: "red",
            zIndex: 10,
          }}
        />

        {new Array(6).fill(0).map((_, index) => {
          return (
            <Circle
              key={index}
              radius={RADIUS}
              //   color="blue"
              color="rgba(0,0,255,0.3)"
              //   outputRangeTX={[0, -RADIUS]}
              //   outputRangeTY={[0, -RADIUS]}
              // outputRangeTX={[0, 0]}
              // outputRangeTY={[0, 0]}
              {...{ progress, index }}
            />
          );
        })}
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
