import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { clampInterpolate } from "../../animation_helpers/animation";
import { mountTiming } from "../../animation_helpers/hooks";
import commonStyles from "../../commonStyles";
import Circle from "./Circle";
import Oval from "./Oval";
import SvgCircle from "./SvgCircle";

const RADIUS = 60;
function AppleWatchTwo() {
  return (
    <View style={[commonStyles.flexOne, commonStyles.center]}>
      <SvgCircle r={RADIUS} />
    </View>
  )
}



function AppleWatchOne() {
  const progress = mountTiming(4000);

  const style = useAnimatedStyle(() => {
    const rotate = clampInterpolate(progress, [0, 0.5, 0.75],
      [Math.PI / 2, Math.PI * 2 + (Math.PI / 2), Math.PI * 2 + (2 * (Math.PI / 2))])
    return {
      transform: [{ rotate: `${rotate}rad` }]
    }
  })

  return (
    <View style={[styles.container]}>
      <Animated.View style={[{
        width: RADIUS * 2, height: RADIUS * 2,
        alignItems: "center", justifyContent: "center",
      }, style]}>
        <View style={{ position: "absolute", width: 30, height: 30, borderRadius: 30, backgroundColor: "#61dafb", }} />
        {new Array(3).fill(0).map((_, ind) => {
          return (
            <Oval key={`oval_${ind}`}
              radius={RADIUS} index={ind} progress={progress} containerStyle={{ position: "absolute" }} />
          )
        })}
        {/* <View style={{ position: "absolute", width: 10, height: 10, borderRadius: 10, backgroundColor: "blue", bottom: 10 }} /> */}
      </Animated.View>
    </View>
  )
}

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
              color="rgba(0,0,255,0.3)"
              {...{ progress, index }}
            />
          );
        })}
      </Animated.View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
