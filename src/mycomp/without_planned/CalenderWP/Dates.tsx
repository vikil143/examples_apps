import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { SIZE } from "./constants";

interface Props {
  dates: number[];
  containerStyle?: ViewStyle;
}

export default function Dates({ dates, containerStyle }: Props) {
  return (
    <View style={[styles.dates, containerStyle]}>
      {dates.map((date, i) => {
        return (
          <View
            key={`month_${i}`}
            style={[
              styles.date,
              // { backgroundColor: i % 2 === 0 ? "red" : "green" },
            ]}
          >
            <Text>{date}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    width: SIZE - 1,
    height: SIZE * 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  dates: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    // backgroundColor: "red",
  },
});
