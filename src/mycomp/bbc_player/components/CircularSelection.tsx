import * as React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Channel } from "./Model";
import ChannelIcon from "./ChannelIcon";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { SCREEN_WIDTH } from "../../../constants";
import Pangesture from "./Pangesture";

const { width } = Dimensions.get("window");
const height = width / 1.4;
const D = width * 1.2;
const innerR = D / 2;
const styles = StyleSheet.create({
  container: {
    width,
    height,
  }
});

interface CircularSelectionProps {
  channels: Channel[];
  index: Animated.SharedValue<number>
}

export default ({ channels, index }: CircularSelectionProps) => {
  const a = Math.sin(Math.PI / channels.length);
  const r = innerR * a / (1 - a);
  const R = innerR + 2 * r;


  const style = useAnimatedStyle(() => {
    const rotate = interpolate(index.value, [0, channels.length], [0, Math.PI * 2])
    return {
      transform: [{ rotateZ: `${rotate}rad` }]
    }
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={[{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: R,
          width: R * 2,
          height: R * 2,
          left: -(R - width / 2),
          overflow: "hidden",
          transform: [{ rotateZ: `${Math.PI * 2 * 0.75}rad` }],
        }, style]}
      >
        <LinearGradient
          style={{
            ...StyleSheet.absoluteFillObject,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%"
          }}
          colors={["#353637", "#161819", "#161819"]}
        />
        {channels.map((_, key) => {
          const theta = key * (Math.PI * 2) / channels.length
          const translateX = Math.cos(theta) * (R - r)
          const translateY = Math.sin(theta) * (R - r)
          return (
            <View
              {...{ key }}
              style={{
                position: "absolute",
                transform: [{ translateX }, { translateY }, { rotateZ: `${theta + Math.PI / 2}rad` }]
                // top: 0,
                // left: 0,
                // transform: [{ translateX: cx }, { translateY: cy },
                // { rotateZ: `${key * Math.PI * 2 / channels.length}rad` }, { translateY: -cy }]
              }}
            >
              <ChannelIcon name={`${key + 1}`} radius={r} currentIndex={key} />
            </View>
          );
        })}
        <Pangesture length={channels.length} ratio={width / 2}  {...{ index }} />
      </Animated.View>
    </View>
  );
};
