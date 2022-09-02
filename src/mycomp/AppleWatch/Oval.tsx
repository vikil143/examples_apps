import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import Animated, { useAnimatedStyle, useDerivedValue } from "react-native-reanimated"
import { clampInterpolate } from "../../animation_helpers/animation";

interface Props {
  containerStyle: ViewStyle;
  index: number;
  radius: number;
  progress: Animated.SharedValue<number>
}

export default function Oval({ containerStyle, index, radius, progress }: Props) {
  const theta = useDerivedValue(() => {
    // return (index * 2 * Math.PI) / 3;
    return 0
  }, [])
  const style = useAnimatedStyle(() => {
    const rotate = clampInterpolate(progress, [0.5, 1], [0, index * Math.PI / 3])
    return {
      transform: [{ rotate: `${rotate}rad` }, { scaleX: 2 }]
    }
  })
  return (
    <View style={[containerStyle]}>
      <Animated.View
        style={[
          {
            width: radius,
            height: radius,
            borderRadius: radius,
            backgroundColor: "tranparent",
            padding: 10,
            borderWidth: 3,
            borderColor: "#61dafb"
          },
          style
        ]}
      >
        <View
          style={{ flex: 1, borderRadius: radius }}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({});
