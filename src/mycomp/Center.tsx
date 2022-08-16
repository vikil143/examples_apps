import React, { ReactChild } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface Props {
  children: ReactChild;
  style?: ViewStyle[] | ViewStyle;
}

export default function Center({ children, style }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
