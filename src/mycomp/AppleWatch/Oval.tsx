import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface Props {
  containerStyle: ViewStyle;
  index: number;
  radius: number;
}

export default function Oval({ containerStyle, index, radius }: Props) {
  const rotate = (index * 2 * Math.PI) / 3;
  return (
    <View style={[containerStyle]}>
      <View
        style={[
          {
            width: radius,
            height: radius,
            borderRadius: radius,
            transform: [{ rotate: `${rotate}rad` }, { scaleX: 2 }],
            backgroundColor: "blue",
            padding: 10,
          },
        ]}
      >
        <View
          style={{ flex: 1, backgroundColor: "white", borderRadius: radius }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
