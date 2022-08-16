import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const RADIUS = width / 2 - 16;

interface Props {
  color: string;
}

export default function HalfCircle({ color }: Props) {
  return (
    <View style={{ width: RADIUS * 2, height: RADIUS, overflow: "hidden" }}>
      <View
        style={{
          width: RADIUS * 2,
          height: RADIUS * 2,
          borderRadius: RADIUS,
          backgroundColor: color,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
