import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Columns from "./Columns";
import XAxis from "./xAxis";
import YAxis from "./yAxis";

let width = Dimensions.get("screen").width;
let xAxisHeight = 30;

export default function BarGraph() {
  return (
    <View style={styles.main}>
      <XAxis width={width} height={xAxisHeight} />
      <YAxis />
      <Columns />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 25,
    marginHorizontal: 0,
  },
});
