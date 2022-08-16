import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const SIZE = width / 4;

interface RectProps {
  color?: string;
}

const Rect = ({ color = "red" }: RectProps) => {
  return <View style={[styles.rect, { backgroundColor: color }]} />;
};

export default function Logo() {
  return (
    <View style={{ transform: [{ rotate: "-45deg" }] }}>
      <View style={styles.row}>
        <Rect />
        <Rect color="blue" />
      </View>
      <View style={styles.row}>
        <Rect color="orange" />
        <Rect color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  rect: {
    width: SIZE,
    height: SIZE,
    borderRadius: 10,
    margin: 5,
  },
});
