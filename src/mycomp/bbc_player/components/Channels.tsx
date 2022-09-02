import * as React from "react";
import { View, StyleSheet } from "react-native";

import CircularSelection from "./CircularSelection";
import Thumbnails from "./Thumbnails";
import { Channel } from "./Model";
import { useSharedValue } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#1a1b1c"
  }
});

interface ChannelsProps {
  channels: Channel[];
}

export default ({ channels }: ChannelsProps) => {
  const index = useSharedValue(0);
  return (
    <View style={styles.container}>
      <Thumbnails {...{ channels, index }} />
      <CircularSelection {...{ channels, index }} />
    </View>
  );
};
