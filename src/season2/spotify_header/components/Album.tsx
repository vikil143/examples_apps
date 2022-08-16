import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Album, MIN_HEADER_HEIGHT, HEADER_DELTA } from "./Model";
import Header from "./Header";
import Content from "./Content";
import Cover from "./Cover";
import ShufflePlay, { BUTTON_HEIGHT } from "./ShufflePlay";

interface AlbumProps {
  album: Album;
}

export default ({ album }: AlbumProps) => {
  const { artist } = album;
  return (
    <View style={styles.container}>
      <Cover {...{ album }} />
      <Content {...{ album }} />
      <Header {...{ artist }} />
      <View
        style={{
          position: "absolute",
          top: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
          left: 0,
          right: 0,
        }}
      >
        <ShufflePlay />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
