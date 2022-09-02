import * as React from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";

import { Channel } from "./Model";
import Thumbnail from "./Thumbnail";
import Header from "./Header";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import PangestureOfThubnail from "./PangestureOfThubnail";
import { SCREEN_WIDTH } from "../../../constants";


const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 0.8
  },
  content: {
    flex: 1
  }
});

interface ItemProps {

  channel: Channel;
  keyIndex: number,
  index: Animated.SharedValue<number>
}

const Item = ({ keyIndex, channel, index }: ItemProps) => {

  const style = useAnimatedStyle(() => {
    const translateX = interpolate(index.value, [keyIndex - 1, keyIndex, keyIndex + 1], [SCREEN_WIDTH, 0, -SCREEN_WIDTH])
    return {
      transform: [{ translateX }]
    }
  })

  return (

    <Animated.View
      style={[{
        ...StyleSheet.absoluteFillObject
      },
        style
      ]}
    >
      <Thumbnail {...{ channel }} />
    </Animated.View>
  )
}

interface ThumbnailsProps {
  channels: Channel[];
  index: Animated.SharedValue<number>
}

export default ({ channels, index }: ThumbnailsProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header />
      <View style={styles.content}>
        {channels.map((channel, key) => {
          return (
            <Item key={key} {...{ channel, keyIndex: key, index }} />
          );
        })}
        <PangestureOfThubnail ratio={width} length={channels.length} index={index} />
      </View>
    </View>
  );
};
