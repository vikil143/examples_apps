import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as d3Scale from "d3-scale";
import Svg, { Circle } from "react-native-svg";
import { SCREEN_WIDTH } from "../../../constants";

const color = "white";
const POINT_SIZE = 10;

// const scaleX = d3Scale.scaleLinear().domain([0, 15]).range([0, SCREEN_WIDTH]);

// const p1 = scaleX(2);
// const p2 = scaleX(4);
// const p3 = scaleX(6);
// const p4 = scaleX(8);
// const p5 = scaleX(10);

export default function ScaleD3() {
  return (
    <View style={styles.container}>
      <Svg
        width={SCREEN_WIDTH}
        height={300}
        style={{ backgroundColor: "black" }}
      >
        {/* <Circle cy={10} cx={p4} r={POINT_SIZE} fill="red" /> */}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
