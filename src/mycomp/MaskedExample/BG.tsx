import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Props {
  color: string;
}

const { width } = Dimensions.get("window");

export const SIZE = width / 2;

export default function BG({ color }: Props) {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = 0;
    progress.value = withTiming(1, { duration: 1000 });
  }, [color]);

  const randomNo = (lower: number, upper: number) => {
    "worklet";
    return Math.floor(Math.random() * upper) + lower;
  };

  const style = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0, Math.SQRT2]);
    const translateX = interpolate(scale, [0, Math.SQRT2], [-SIZE / 2, 0]);
    const translateY = interpolate(scale, [0, Math.SQRT2], [SIZE / 2, 0]);

    return {
      opacity: progress.value,
      transform: [{ translateX }, { translateY }, { scale }],
    };
  });

  return (
    <MaskedView
      style={StyleSheet.absoluteFillObject}
      maskElement={
        <Animated.View
          style={[
            {
              width: SIZE * 2,
              height: SIZE * 2,
              borderRadius: SIZE,
              backgroundColor: "black",
            },
            style,
          ]}
        />
      }
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          width: SIZE * 2,
          height: SIZE * 2,
          backgroundColor: color,
        }}
        onLayout={() => console.log("loggs")}
      ></View>
    </MaskedView>
  );
}

const styles = StyleSheet.create({});
