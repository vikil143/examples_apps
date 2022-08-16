import React from "react";
import { StyleSheet, Image, View, ImageRequireSource } from "react-native";

interface Props {
  image: ImageRequireSource;
  width: number;
  height: number;
  top: number;
  left: number;
}

export default function ImageCropper({
  image,
  width,
  height,
  top,
  left,
}: Props) {
  return (
    <View style={[styles.container]}>
      <View style={{ width, height, overflow: "hidden" }}>
        <Image
          style={[{ width, height, top: -top, left: -left }]}
          source={image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {},
  container: {},
});
