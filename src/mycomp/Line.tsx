import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Line() {
  return <View style={styles.line}></View>;
}

const styles = StyleSheet.create({
  line: {
    width: "100%",
    backgroundColor: "#ddd",
    height: 1,
  },
});
