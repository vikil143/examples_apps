import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  all: number;
  horizontal: number;
  vertical: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
  children: React.ReactNode;
}

export default function Padding({
  all = 10,
  horizontal,
  vertical,
  top,
  bottom,
  left,
  right,
  children,
}: Partial<Props>) {
  return (
    <View
      style={{
        padding: all,
        paddingHorizontal: horizontal,
        paddingVertical: vertical,
        paddingBottom: bottom,
        paddingTop: top,
        paddingLeft: left,
        paddingRight: right,
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});
