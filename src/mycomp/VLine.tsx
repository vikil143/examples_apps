import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface Props {
  style?: ViewStyle;
}

export default function VLine({ style }: Props) {
  return <View style={[styles.line, style]}></View>;
}

const styles = StyleSheet.create({
  line: {
    width: 2,
    height: "200%",
    backgroundColor: "#ddd",
  },
});
