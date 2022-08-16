import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageRequireSource,
} from "react-native";
import { SCREEN_WIDTH } from "../../constants";

export default function ImageAutoAdjuster() {
  // const scaleHeight = ({
  //   source,
  //   desiredWidth,
  // }: {
  //   source: ImageRequireSource;
  //   desiredWidth: number;
  // }) => {
  //   const { width, height } = Image.resolveAssetSource(source);

  //   return (desiredWidth / width) * height;
  // };

  return (
    <View style={[]}>
      <View>
        <Image
          style={{
            position: "relative",
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH,
          }}
          resizeMode="cover"
          source={require("../../assets/image_two.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
