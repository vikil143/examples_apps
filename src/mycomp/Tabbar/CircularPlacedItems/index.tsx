import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { canvas2Polar, polar2Canvas } from "react-native-redash";

interface Props {
  radius: number;
  style?: ViewStyle;
}

let noOfItems = 3;

export default function CircularPlacedItems({ radius }: Props) {
  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: "white",
      }}
    >
      {new Array(noOfItems).fill(0).map((_, i) => {
        // const {  } =  canvas2Polar({ x: 0, y: 0 }, { x: radius, y: radius });
        const { x, y } = polar2Canvas(
          { theta: i * 60, radius },
          { x: radius, y: radius }
        );
        return (
          <View
            key={i}
            style={{
              position: "absolute",
              top: x,
              left: y,
              backgroundColor: "red",
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
