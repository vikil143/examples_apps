import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { SCREEN_WIDTH } from "../../../constants";

const STROKE = 18;
const RADIUS = (SCREEN_WIDTH - STROKE) / 2;

export default function Ex() {
  return (
    <View>
      <Svg
        width={RADIUS * 2}
        style={{ backgroundColor: "green" }}
        height={RADIUS * 2}
        viewBox={`0 0 1 1`}
      >
        <Circle
          r={0.5}
          fill="red"
          cx={0.5}
          cy={0.5}
          stroke={"blue"}
          strokeWidth={0.05}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
