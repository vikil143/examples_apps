import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

interface Props {
  color: string;
}

const { width } = Dimensions.get("window");

export const SIZE = width / 2;

function NoABG({ color }: Props) {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        width: SIZE * 2,
        height: SIZE * 2,
        backgroundColor: color,
      }}
    ></View>
  );
}

const styles = StyleSheet.create({});

export default React.memo(NoABG);
