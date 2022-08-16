import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Circle } from "react-native-svg";
import { SCREEN_WIDTH } from "../../../constants";

const PADDING = 15;
const STROKE = 30;
const RADIUS = (SCREEN_WIDTH - STROKE) / 2;

export default function Quadrant() {
  return (
    <Circle
      r={RADIUS - PADDING}
      // fill="red"
      cx={RADIUS}
      cy={RADIUS}
      stroke={"yellow"}
      strokeWidth={STROKE}
      strokeDasharray={`${2 * Math.PI * (RADIUS - PADDING)} ${
        2 * Math.PI * (RADIUS - PADDING)
      }`}
      strokeLinecap="round"
    />
  );
}

const styles = StyleSheet.create({});
