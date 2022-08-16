import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageRequireSource,
} from "react-native";

interface ImageCutterProps {
  image: string;
}

// This is for resize mode for contain
export default function LocalImage({ image }: ImageCutterProps) {
  const scaleHeight = ({
    source,
    desiredWidth,
  }: {
    source: ImageRequireSource;
    desiredWidth: number;
  }) => {
    const { width, height } = Image.resolveAssetSource(source);

    return (desiredWidth / width) * height;
  };

  const imageSource = "./local_image.png";
  const imageWidth = 150;
  const imageHeight = scaleHeight({
    source: require(image),
    desiredWidth: imageWidth,
  });

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require(image)}
        style={{
          borderWidth: 1,
          width: imageWidth,
          height: imageHeight,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
