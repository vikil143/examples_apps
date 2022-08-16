import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { PositionOfTab } from ".";
import { SCREEN_WIDTH } from "../../constants";

const SIZE = SCREEN_WIDTH / 4;

interface LayerProps {
  position: Animated.SharedValue<PositionOfTab>;
}

export default function Layer({ position }: LayerProps) {
  const lineStyle = useAnimatedStyle(() => {
    const leftOffset = SIZE * 0.2;
    const left = interpolate(
      position.value,
      [0, 1, 2, 3],
      [
        leftOffset,
        SIZE + leftOffset,
        SIZE * 2 + leftOffset,
        SIZE * 3 + leftOffset,
      ]
    );
    return {
      left,
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: SIZE * 0.6,
          flexDirection: "column-reverse",
          left: 0,
          bottom: 0,
        },
        lineStyle,
      ]}
    >
      {/* <View
        style={{
          height: 5,
          borderRadius: 8,
          backgroundColor: "white",
          width: SIZE * 0.6,
        }}
      /> */}
      <Svg width={SIZE * 0.6} style={{}} height={SIZE * 0.6} viewBox="0 0 1 1">
        {/* <Path d="M 0.2 0 H 0.8 L 1 0.7 H 0 Z" fill="url(#color)" /> */}
        <Path d="M 0.2 1 H 0.8 L 1 0.2 H 0 Z" fill="url(#color)" />
        <Defs>
          <LinearGradient id="color" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset={"10%"} stopColor="transparent" />
            {/* <Stop offset={"20%"} stopColor="rgb(221, 221, 221, 0.1)" /> */}
            <Stop offset={"100%"} stopColor="#ddd" />
          </LinearGradient>
        </Defs>
      </Svg>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
