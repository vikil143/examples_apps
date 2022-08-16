import React from "react";
import { StyleSheet, View } from "react-native";
import { Value, multiply, set, useCode } from "react-native-reanimated";

// import { timing } from "react-native-redash";
import { R1, R2, R3 } from "./Constants";
import Ring from "./Ring";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000001",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
const rings = [R3, R2, R1];

export default () => {
  return (
    <View style={styles.container}>
      {rings.map((ring, i) => (
        <View key={i} style={styles.overlay}>
          <Ring {...{ ring }} />
        </View>
      ))}
    </View>
  );
};
