import React from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { R1, R2, R3, SIZE, STROKE_WIDTH } from "./Constants";

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center"
  },
  canvas: {
    width: SIZE,
    height: SIZE
  }
});

export default () => {
  return (
    <>
      {[R1, R2, R3].map((ring, key) => (
        <View style={styles.overlay} {...{ key }}>
          <View
            style={{
              width: ring.size,
              height: ring.size,
              borderRadius: ring.size / 2,
              borderWidth: 2,
              borderColor: "#000001"
            }}
          />
        </View>
      ))}
      <View style={styles.overlay}>
        <View style={styles.canvas}>
          <Icon
            name="chevron-right"
            style={{
              position: "absolute",
              top: 0,
              left: SIZE / 2 - STROKE_WIDTH / 2
            }}
            color="black"
            size={STROKE_WIDTH}
          />
          <Icon
            name="chevrons-right"
            style={{
              position: "absolute",
              top: STROKE_WIDTH,
              left: SIZE / 2 - STROKE_WIDTH / 2
            }}
            color="black"
            size={STROKE_WIDTH}
          />
          <Icon
            name="chevron-up"
            style={{
              position: "absolute",
              top: STROKE_WIDTH * 2,
              left: SIZE / 2 - STROKE_WIDTH / 2
            }}
            color="black"
            size={STROKE_WIDTH}
          />
        </View>
      </View>
    </>
  );
};
