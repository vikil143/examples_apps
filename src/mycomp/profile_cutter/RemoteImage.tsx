import React from "react";
import { View, Text, Image } from "react-native";

interface RemoteImageProps {
  uri: string;
  desiredWidth: number;
}

const RemoteImage = ({ uri, desiredWidth }: RemoteImageProps) => {
  const [desiredHeight, setDesiredHeight] = React.useState(0);

  Image.getSize(uri, (width, height) => {
    setDesiredHeight((desiredWidth / width) * height);
  });

  return (
    <Image
      source={{ uri }}
      style={{
        borderWidth: 1,
        width: desiredWidth,
        height: desiredHeight,
      }}
    />
  );
};

const RemoteImageExp = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RemoteImage
        uri="https://via.placeholder.com/350x150"
        desiredWidth={200}
      />
    </View>
  );
};

export default RemoteImageExp;
