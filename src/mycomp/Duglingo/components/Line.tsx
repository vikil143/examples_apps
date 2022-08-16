import React from "react";
import { View, Text } from "react-native";

export default function Line() {
  return (
    <View>
      {[0, 49, 49 * 2].map((line) => (
        <View
          key={line}
          style={{
            top: line - 2,
            width: "100%",
            height: 2,
            backgroundColor: "#E6E5E6",
            // backgroundColor: "red",
          }}
        />
      ))}
    </View>
  );
}
