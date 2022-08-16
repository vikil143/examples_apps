import React from "react";
import { StyleSheet, View } from "react-native";
import { Surface, Text, Group, Shape } from "@react-native-community/art";

interface Props {
  width: number;
  height: number;
}

export default function xAxis({ width, height }: Props) {
  return (
    <Surface width={width} height={height}>
      <Group>
        <Shape d={"M 0 0 L 50 50"} stroke={"grey"} strokeWidth={10} />
      </Group>
    </Surface>
  );
}

const styles = StyleSheet.create({});
