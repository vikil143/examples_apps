import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const R = 50;
const storkeWidth = 2;

export default function StoryCircle() {
  const circumfernce = Math.PI * 2 * R;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg viewBox={`0 0 ${R * 2} ${R * 2}`}>
        <Circle
          r={R}
          cx={R}
          cy={R}
          //   strokeDasharray={`${circumfernce / 10},5`}
          strokeDashoffset={circumfernce}
          strokeWidth={storkeWidth}
          strokeLinejoin="round"
          stroke={"red"}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
