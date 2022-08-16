import React from "react";
import { Text, View } from "react-native";

interface Props {
  size?: number;
}

function Spacing({ size = 10 }: Props) {
  return <View style={{ padding: size }}></View>;
}

export default React.memo(Spacing);
