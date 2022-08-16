import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";

const width = SCREEN_WIDTH - 50;
const height = SCREEN_HEIGHT - 50;

const BrainTest = () => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#000" }}>
      <View style={[styles.paper]}>
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <Path fill={"#fff"} d={`M 0 0 H${width} V${height} H${-width} Z`} />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paper: {
    flex: 1,
  },
});

export default BrainTest;
